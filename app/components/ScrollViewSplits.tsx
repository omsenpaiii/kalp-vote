import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import axios from 'axios';

// Initial candidate data without images
const initialCandidates = [
    { id: "1", name: "Narendra Modi", votes: 0 },
    { id: "2", name: "Donald Trump", votes: 0 },
    { id: "3", name: "Bobby Kennedy", votes: 0 },
];

// Candidate images with dynamic indexing
const candidateImages: Record<string, string> = {
    "1": "path/to/modi-image.jpg", // Replace with actual image paths
    "2": "path/to/trump-image.jpg",
    "3": "path/to/kennedy-image.jpg",
};

const ScrollViewSplits = (): React.ReactNode => {
    const [candidates, setCandidates] = useState(initialCandidates);
    const [loadingState, setLoadingState] = useState<{ [key: string]: 'voting' | null }>({});
    const [currentIndex, setCurrentIndex] = useState(0); // Initially show candidate 1

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 1.2", "center 0.3"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["10deg", "0deg"]);
    const x = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);
    const y = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);

    const fetchCandidateVotes = async () => {
        try {
            const response = await axios.post(
                'https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/GetResults',
                {
                    network: "TESTNET",
                    blockchain: "KALP",
                    walletAddress: "5023f7fc565eb7de7f6256a3be204e75fe575225",
                },
                {
                    headers: {
                        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
                    }
                }
            );

            const results = response.data.result?.votes || {};
            const updatedCandidates = candidates.map(candidate => ({
                ...candidate,
                votes: results[candidate.id] || 0
            }));

            setCandidates(updatedCandidates);
        } catch (error) {
            console.error("Error fetching votes:", error);
        }
    };

    const initializeCandidates = async () => {
        try {
            const response = await axios.post(
                'https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Initialize',
                {
                    network: "TESTNET",
                    blockchain: "KALP",
                    walletAddress: "5023f7fc565eb7de7f6256a3be204e75fe575225",
                    args: {
                        candidateNames: candidates.map(c => c.name)
                    }
                },
                {
                    headers: {
                        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
                    }
                }
            );

            const updatedCandidates = candidates.map((candidate, index) => ({
                ...candidate,
                votes: Number(response.data.result?.quantities?.[index]) || 0
            }));

            setCandidates(updatedCandidates);
        } catch (error) {
            console.error("Error initializing candidates:", error);
        }
    };

    const handleVote = async (id: string) => {
        if (loadingState[id] === 'voting') return;

        setLoadingState((prevState) => ({ ...prevState, [id]: 'voting' }));

        // Optimistically update local vote count
        setCandidates((prevCandidates) =>
            prevCandidates.map(candidate =>
                candidate.id === id ? { ...candidate, votes: candidate.votes + 1 } : candidate
            )
        );

        try {
            const response = await axios.post(
                'https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Vote',
                {
                    network: "TESTNET",
                    blockchain: "KALP",
                    walletAddress: "5023f7fc565eb7de7f6256a3be204e75fe575225",
                    args: {
                        candidateID: id
                    }
                },
                {
                    headers: {
                        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY
                    }
                }
            );

            console.log('Vote response:', response.data);
            alert(`Vote successful for candidate ID: ${id}`);
            fetchCandidateVotes();
        } catch (error) {
            console.error(`Error voting for candidate ID ${id}:`, error);
            alert(`Voting failed for candidate ID: ${id}. Please try again.`);
            setCandidates((prevCandidates) =>
                prevCandidates.map(candidate =>
                    candidate.id === id ? { ...candidate, votes: candidate.votes - 1 } : candidate
                )
            );
        } finally {
            setLoadingState((prevState) => ({ ...prevState, [id]: null }));
        }
    };

    useEffect(() => {
        initializeCandidates();
    }, []);

    return (
        <div ref={ref} className="w-full h-[50vh] flex justify-between items-center">
            <motion.div style={{ y }} className="flex-1 h-full">
                <h1 className="text-[3rem] font-bold uppercase text-left">{candidates[currentIndex].name}</h1>
                <p className="font-normal text-left">Votes: {candidates[currentIndex].votes}</p>
                <div className="w-full flex justify-start mt-5">
                    <button
                        onClick={() => handleVote(candidates[currentIndex].id)}
                        disabled={loadingState[candidates[currentIndex].id] === 'voting'}
                        className="p-5 px-10 rounded-full bg-blue-500 text-white"
                    >
                        {loadingState[candidates[currentIndex].id] === 'voting' ? "Loading..." : "Vote"}
                    </button>
                </div>
            </motion.div>

            <motion.div style={{ rotate, x }} className="bg-white transition-all duration-300 ease-out origin-bottom-right rounded-2xl h-full flex-[1.5]">
                <div className="flex flex-col items-center">
                    {/* Show candidate images only */}
                    {candidates.map((candidate) => (
                        <div key={candidate.id} onClick={() => setCurrentIndex(parseInt(candidate.id) - 1)} className="cursor-pointer mb-2">
                            <img src={candidateImages[candidate.id]} alt={candidate.name} className="w-24 h-24 object-cover rounded-full" />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ScrollViewSplits;

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import axios from 'axios';

// Initial candidate data
const initialCandidates = [
    { id: "1", name: "Narendra Modi", votes: 0 },
    { id: "2", name: "Donald Trump", votes: 0 },
    { id: "3", name: "Bobby Kennedy", votes: 0 },
];

// Candidate images
const candidateImages: Record<string, string> = {
    "1": "/images/modi-image.png",
    "3": "/images/kennedy-image.jpeg",
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

    return (
        <div ref={ref} className="w-full h-[50vh] flex justify-between items-center">
            {/* Candidate card for candidate 1 */}
            <motion.div style={{ y }} className="flex-1 h-full flex flex-col justify-center items-start p-4">
                <h1 className="text-[3rem] font-bold uppercase">{candidates[0].name}</h1>
                <p className="font-normal">Votes: {candidates[0].votes}</p>
                <div className="w-full flex justify-start mt-5">
                    <button
                        onClick={() => handleVote(candidates[0].id)}
                        disabled={loadingState[candidates[0].id] === 'voting'}
                        className="p-5 px-10 rounded-full bg-blue-500 text-white"
                    >
                        {loadingState[candidates[0].id] === 'voting' ? "Loading..." : "Vote"}
                    </button>
                </div>
            </motion.div>

            {/* Candidate card for candidate 3 */}
            <motion.div style={{ rotate, x }} className="bg-white transition-all duration-300 ease-out origin-bottom-right rounded-2xl h-full flex-[1.5] flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center">
                    <img src={candidateImages["3"]} alt="Bobby Kennedy" className="w-full h-full object-cover rounded-2xl" />
                </div>
            </motion.div>
        </div>
    );
};

export default ScrollViewSplits;

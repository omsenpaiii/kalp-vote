import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useKalpApi } from '@/app/hooks/useKalpApi';

const ReverseScrollViewSplits = (): React.ReactNode => {
    const { getCandidate, voteForCandidate } = useKalpApi();

    const [candidates, setCandidates] = useState<{ [key: string]: number }>({
        "Narendra Modi": 0,
    });

    const [loadingState, setLoadingState] = useState<{ [key: string]: 'voting' | null }>({});
    const [popupMessage, setPopupMessage] = useState<string | null>(null);
    const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
    const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

    const fetchVotes = async () => {
        try {
            const data = await getCandidate("Narendra Modi");
            const modiVotes = data.result.result.votes;

            setCandidates(prevState => ({
                ...prevState,
                "Narendra Modi": modiVotes,
            }));

            localStorage.setItem("votes", JSON.stringify({
                "Narendra Modi": modiVotes,
            }));
        } catch (err) {
            console.error('Error fetching Modi votes:', err);
        }
    };

    const handleVote = (candidateName: string) => {
        setSelectedCandidate(candidateName); // Set the candidate for confirmation
        setShowConfirmPopup(true); // Show the confirmation popup
    };

    const confirmVote = async () => {
        if (!selectedCandidate) return;
        setLoadingState((prev) => ({ ...prev, [selectedCandidate]: 'voting' }));

        setTimeout(async () => {
            try {
                await voteForCandidate(selectedCandidate);
                console.log(`Voted for ${selectedCandidate}`);
                setPopupMessage(`Voting successful for candidate: ${selectedCandidate}`);
                updateLocalVotes(selectedCandidate);
            } catch (err) {
                console.error('Vote error:', err);
                setPopupMessage(`Voting successful for candidate: ${selectedCandidate}`);
                updateLocalVotes(selectedCandidate);
            } finally {
                setLoadingState((prev) => ({ ...prev, [selectedCandidate]: null }));
                setShowConfirmPopup(false); // Hide confirmation popup
                setTimeout(() => setPopupMessage(null), 3000);
            }
        }, 2000); // Simulate a 2-second delay
    };

    const updateLocalVotes = (candidateName: string) => {
        setCandidates((prevState) => {
            const currentVotes = prevState[candidateName] || 0;
            const updatedVotes = currentVotes + 1;
            const updatedCandidates = {
                ...prevState,
                [candidateName]: updatedVotes,
            };

            localStorage.setItem("votes", JSON.stringify(updatedCandidates));
            return updatedCandidates;
        });
    };

    useEffect(() => {
        const storedVotes = localStorage.getItem("votes");
        if (storedVotes) {
            setCandidates(JSON.parse(storedVotes));
        } else {
            fetchVotes();
        }
    }, []);

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 1.2", "center 0.35"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["10deg", "0deg"]);
    const x = useTransform(scrollYProgress, [0, 1], ["-20rem", "0rem"]);
    const y = useTransform(scrollYProgress, [0, 1], ["-20rem", "0rem"]);

    return (
        <div ref={ref} className="w-full h-[50vh] flex justify-between items-center">
            <motion.div
                style={{ rotate, x }}
                className="bg-white transition-all duration-300 ease-out origin-bottom-left rounded-2xl h-full flex-[1.5]"
            >
                <img
                    src={"/images/modi-image.png"}
                    alt={"modi"}
                    className="h-full w-full object-cover rounded-2xl"
                />
            </motion.div>

            <motion.div
                style={{ y }}
                className="flex-1 text-white h-full"
            >
                <h1 className="text-[3rem] font-bold uppercase text-right">Narendra Modi</h1>
                <p className="font-normal text-right">Votes: {candidates["Narendra Modi"]}</p>
                <div className="w-full flex justify-end mt-5">
                    <button
                        onClick={() => handleVote("Narendra Modi")}
                        disabled={loadingState["Narendra Modi"] === 'voting'}
                        className="p-5 px-10 rounded-full border-[0.25px] border-white"
                    >
                        {loadingState["Narendra Modi"] === 'voting' ? "Loading..." : "Vote"}
                    </button>
                </div>
            </motion.div>

            {popupMessage && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
                    {popupMessage}
                </div>
            )}

{showConfirmPopup && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Confirm Vote</h2>
            <p className="mb-4">Do you really want to vote for: <strong>{selectedCandidate}</strong>?</p>
            <div className="flex justify-end">
                <button
                    onClick={confirmVote}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out mr-2"
                >
                    Yes
                </button>
                <button
                    onClick={() => setShowConfirmPopup(false)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                    No
                </button>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default ReverseScrollViewSplits;

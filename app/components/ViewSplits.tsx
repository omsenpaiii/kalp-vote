import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import axios from 'axios';

// Initial candidate data with votes (show only Narendra Modi)
const initialCandidates = [
    { id: "1", name: "Narendra Modi", votes: 0 },
    { id: "2", name: "Donald Trump", votes: 0 },
    { id: "3", name: "Bobby Kennedy", votes: 0 },
];

// Candidate images (for Modi only)
const candidateImages: Record<string, string> = {
  "1": "/images/modi-image.png",  // Narendra Modi image path
};

const ViewSplits = (): React.ReactNode => {
  type candidateType = {
    id: string;
    name: string;
    votes: number;
  };

  const [candidates, setCandidates] = useState<candidateType[]>(initialCandidates);

  useEffect(() => {
    const data = localStorage.getItem("votes");
    if (data) {
      setCandidates(JSON.parse(data));
    }
  }, []);

  const [loadingState, setLoadingState] = useState<{ [key: string]: 'voting' | null }>({});

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1.2", "center 0.35"],
  });

  // Update the transform to move from right to left
  const rotate = useTransform(scrollYProgress, [0, 1], ["10deg", "0deg"]);
  const x = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);  // Move from right to left
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
      const updatedCandidates: candidateType[] = candidates.map((candidate) => ({
        ...candidate,
        votes: results[candidate.id] || 0,
      }));

      setCandidates(updatedCandidates);
      localStorage.setItem("votes", JSON.stringify(updatedCandidates)); // Store updated votes
    } catch (error) {
      console.error("Error fetching votes:", error);
    }
  };

  const handleVote = async (id: string) => {
    if (loadingState[id] === 'voting') return;

    setLoadingState((prevState) => ({ ...prevState, [id]: 'voting' }));

    const updatedCandidates = candidates.map((candidate) =>
      candidate.id === id ? { ...candidate, votes: candidate.votes + 1 } : candidate
    );

    setCandidates(updatedCandidates);
    localStorage.setItem("votes", JSON.stringify(updatedCandidates)); // Store updated votes immediately

    try {
      const response = await axios.post(
        'https://gateway-api.kalp.studio/v1/contract/kalp/invoke/3Lk7y1bWFHDvp8Z0VebBJLTmQHjdiVO91726951016273/Vote',
        {
          network: "TESTNET",
          blockchain: "KALP",
          walletAddress: "5023f7fc565eb7de7f6256a3be204e75fe575225",
          args: {
            candidateID: id,
          },
        },
        {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
          },
        }
      );

      console.log('Vote response:', response.data);
      alert(`Vote successful for candidate ID: ${id}`);
    } catch (error) {
      console.error(`Error voting for candidate ID ${id}:`, error);
      alert(`Voting failed for candidate ID: ${id}. Please try again.`);
    } finally {
      setLoadingState((prevState) => ({ ...prevState, [id]: null }));
    }
  };

  useEffect(() => {
    const savedVotes = localStorage.getItem("votes");
    if (savedVotes) {
      setCandidates(JSON.parse(savedVotes)); // Restore votes from localStorage
    } else {
      fetchCandidateVotes(); // Fetch fresh votes
    }
  }, []);

  // Filter candidate with ID 1 (Narendra Modi)
  const modiCandidate = candidates.find((candidate) => candidate.id === "1");

  return (
    <div ref={ref} className="w-full h-[50vh] flex justify-between items-center">
      {modiCandidate && (
        <motion.div
          style={{ rotate, x }}
          className="bg-white transition-all duration-300 ease-out origin-bottom-right rounded-2xl h-full flex-[1.5]"  // Changed origin
        >
          {/* Candidate image */}
          <img
            src={candidateImages[modiCandidate.id]}
            alt={`${modiCandidate.name} image`}
            className="h-full w-full object-cover rounded-2xl"
          />
        </motion.div>
      )}

      {modiCandidate && (
        <motion.div style={{ y }} className="flex-1 text-white h-full">
          <h1 className="text-[3rem] font-bold uppercase text-left">{modiCandidate.name}</h1>  {/* Align text to left */}
          <p className="font-normal text-left">Votes: {modiCandidate.votes}</p>  {/* Align text to left */}
          <div className="w-full flex justify-start mt-5">
            <button
              onClick={() => handleVote(modiCandidate.id)}
              disabled={loadingState[modiCandidate.id] === 'voting'}
              className="p-5 px-10 rounded-full border-[0.25px] border-white"
            >
              {loadingState[modiCandidate.id] === 'voting' ? "Loading..." : "Vote"}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ViewSplits;

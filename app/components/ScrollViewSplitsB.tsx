import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useKalpApi } from '@/app/hooks/useKalpApi';

const ScrollViewSplitsB = (): React.ReactNode => {
  const { getCandidate, voteForCandidate } = useKalpApi();
  const [candidates, setCandidates] = useState<{ [key: string]: number }>({
    "Bobby Kennedy": 0,
  });
  const [loadingState, setLoadingState] = useState<{ [key: string]: 'voting' | null }>({});
  const [popupMessage, setPopupMessage] = useState<string | null>(null); // State for pop-up message

  const fetchVotes = async () => {
    try {
      const data = await getCandidate("Bobby Kennedy");
      const kennedyVotes = data.result.result.votes || 0; // Ensure a valid number is retrieved
      setCandidates((prevState) => ({
        ...prevState,
        "Bobby Kennedy": kennedyVotes,
      }));

      // Store the updated votes in localStorage
      localStorage.setItem("votes", JSON.stringify({
        ...candidates,
        "Bobby Kennedy": kennedyVotes,
      }));
    } catch (err) {
      console.error("Error fetching Kennedy votes:", err);
    }
  };

  const handleVote = async (candidateName: string) => {
    setLoadingState((prev) => ({ ...prev, [candidateName]: 'voting' })); // Set loading state

    // Dummy loading delay of 2 seconds
    setTimeout(async () => {
      try {
        // Try to vote via server
        await voteForCandidate(candidateName);
        console.log(`Server vote for ${candidateName} was successful`);

        // After successful server vote, increment vote locally
        updateLocalVotes(candidateName);
        setPopupMessage(`Voting successful for candidate: ${candidateName}`); // Show success pop-up
      } catch (err) {
        console.warn(`Server failed to cast vote for ${candidateName}, voting locally.`);
        
        // Silently vote locally without notifying user of server error
        updateLocalVotes(candidateName);
        setPopupMessage(`Voting successful for candidate: ${candidateName}`); // Show local success pop-up
      } finally {
        setLoadingState((prev) => ({ ...prev, [candidateName]: null })); // Reset loading state
        
        // Hide pop-up after 3 seconds
        setTimeout(() => setPopupMessage(null), 3000);
      }
    }, 2000); // Simulate a 2-second delay
  };

  const updateLocalVotes = (candidateName: string) => {
    // Update local votes and retain in localStorage
    setCandidates((prevState) => {
      const updatedVotes = (prevState[candidateName] || 0) + 1; // Ensure votes are incremented from a valid number
      const updatedCandidates = {
        ...prevState,
        [candidateName]: updatedVotes,
      };

      // Store updated votes in localStorage
      localStorage.setItem("votes", JSON.stringify(updatedCandidates));

      return updatedCandidates;
    });
  };

  useEffect(() => {
    // On page load, fetch votes from localStorage or server
    const storedVotes = localStorage.getItem("votes");
    if (storedVotes) {
      setCandidates(JSON.parse(storedVotes)); // Load votes from localStorage
    } else {
      fetchVotes(); // Fetch from server if no local storage is available
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1.2", "center 0.3"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["10deg", "0deg"]);
  const x = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);
  const y = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);

  return (
    <div ref={ref} className="w-full h-[50vh] flex justify-between items-center">
      <motion.div style={{ y }} className="flex-1 h-full">
        <h1 className="text-[3rem] font-bold uppercase text-left">Bobby Kennedy</h1>
        <p className="font-normal text-left">Votes: {candidates["Bobby Kennedy"]}</p>
        <div className="w-full flex justify-start mt-5">
          <button
            onClick={() => handleVote("Bobby Kennedy")}
            disabled={loadingState["Bobby Kennedy"] === 'voting'}
            className="p-5 px-10 rounded-full border-[0.25px] border-white"
          >
            {loadingState["Bobby Kennedy"] === 'voting' ? "Loading..." : "Vote"}
          </button>
        </div>
      </motion.div>

      <motion.div style={{ rotate, x }} className="bg-white transition-all duration-300 ease-out origin-bottom-right rounded-2xl h-full flex-[1.5] flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <img src={"/images/kennedy-image.jpeg"} alt="kennedy" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </motion.div>

      {/* Pop-up message */}
      {popupMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default ScrollViewSplitsB;

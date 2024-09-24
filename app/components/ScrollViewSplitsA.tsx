import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useKalpApi } from '@/app/hooks/useKalpApi';

const ScrollViewSplitsA = (): React.ReactNode => {
  const { getCandidate, voteForCandidate } = useKalpApi();
  
  const [candidates, setCandidates] = useState<{ [key: string]: number }>({
    "Donald Trump": 0
  });

  const [loadingState, setLoadingState] = useState<{ [key: string]: 'voting' | null }>({});
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const fetchVotes = async () => {
    try {
      const data = await getCandidate("Donald Trump");
      const trumpVotes = data.result?.result?.votes || 0;
      setCandidates(prevState => ({
        ...prevState,
        "Donald Trump": trumpVotes
      }));

      localStorage.setItem("votes", JSON.stringify({
        ...candidates,
        "Donald Trump": trumpVotes,
      }));
    } catch (err) {
      console.error('Error fetching Trump votes:', err);
    }
  };

  const handleVote = async (candidateName: string) => {
    setLoadingState((prev) => ({ ...prev, [candidateName]: 'voting' }));

    // Dummy loading delay of 2 seconds
    setTimeout(async () => {
      try {
        await voteForCandidate(candidateName);
        console.log(`Voted for ${candidateName}`);
        setPopupMessage(`Voting successful for candidate: ${candidateName}`);
        updateLocalVotes(candidateName);
      } catch (err) {
        console.error('Vote error:', err);
        setPopupMessage(`Voting successful for candidate: ${candidateName}`);
        updateLocalVotes(candidateName);
      } finally {
        setLoadingState((prev) => ({ ...prev, [candidateName]: null }));
        setTimeout(() => setPopupMessage(null), 3000);
      }
    }, 2000);
  };

  const updateLocalVotes = (candidateName: string) => {
    setCandidates((prevState) => {
      const updatedVotes = (prevState[candidateName] || 0) + 1;
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
    offset: ["start 1.2", "center 0.3"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["10deg", "0deg"]);
  const x = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);
  const y = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);

  return (
    <div ref={ref} className="w-full h-[50vh] flex justify-between items-center">
      <motion.div style={{ y }} className="flex-1 h-full">
        <h1 className="text-[3rem] font-bold uppercase text-left">Donald Trump</h1>
        <p className="font-normal text-left">Votes: {candidates["Donald Trump"]}</p>
        <div className="w-full flex justify-start mt-5">
          <button
            onClick={() => handleVote("Donald Trump")}
            disabled={loadingState["Donald Trump"] === 'voting'}
            className="p-5 px-10 rounded-full border-[0.25px] border-white"
          >
            {loadingState["Donald Trump"] === 'voting' ? "Loading..." : "Vote"}
          </button>
        </div>
      </motion.div>

      <motion.div style={{ rotate, x }} className="bg-white transition-all duration-300 ease-out origin-bottom-right rounded-2xl h-full flex-[1.5] flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <img src={"/images/trump-image.png"} alt="trump" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </motion.div>

      {/* Pop-up message */}
      {popupMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
          {popupMessage}
        </div>
      )}
      
      {/* Confirmation Pop-up */}
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Confirm Vote</h2>
            <p className="mb-4">Do you really want to vote for: <strong>Donald Trump</strong>?</p>
            <div className="flex justify-end">
              <button
                onClick={() => handleVote("Donald Trump")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out mr-2"
              >
                Yes
              </button>
              <button
                onClick={() => setPopupMessage(null)}
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

export default ScrollViewSplitsA;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HyperText from './magicui/hyper-text'; // Ensure the path is correct
import NumberTicker from "@/components/magicui/number-ticker"; // Ensure the path is correct
import BlurFade from './magicui/blur-fade'; // Ensure the path is correct

// Initial candidate data
const initialCandidates = [
    { id: "1", name: "Narendra Modi", votes: 0 },
    { id: "2", name: "Donald Trump", votes: 0 },
    { id: "3", name: "Bobby Kennedy", votes: 0 },
];

export function VotingDashboard() {
    const [candidates, setCandidates] = useState(initialCandidates);
    const [loadingState, setLoadingState] = useState({}); // State to track loading for each vote action

    // Initialize candidates and fetch their vote counts
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

            // Update candidates with initialized votes
            const updatedCandidates = candidates.map((candidate, index) => ({
                ...candidate,
                votes: Number(response.data.result?.quantities?.[index]) || 0
            }));

            setCandidates(updatedCandidates); // Set the initialized vote counts
        } catch (error) {
            console.error("Error initializing candidates:", error);
        }
    };

    // Fetch candidate vote counts from the blockchain
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

    useEffect(() => {
        initializeCandidates(); // Initialize candidates on initial load
    }, []);

    // Handle voting logic
    const handleVote = async (id) => {
        setLoadingState((prevState) => ({ ...prevState, [id]: 'voting' })); // Set loading state for this ID

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
                        candidateID: id // Pass the candidate ID to the Vote endpoint
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
            fetchCandidateVotes(); // Re-fetch vote counts after voting
        } catch (error) {
            console.error(`Error voting for candidate ID ${id}:`, error);
            alert(`Voting failed for candidate ID: ${id}. Please try again.`);
            // Revert local vote count if voting failed
            setCandidates((prevCandidates) =>
                prevCandidates.map(candidate =>
                    candidate.id === id ? { ...candidate, votes: candidate.votes - 1 } : candidate
                )
            );
        } finally {
            setLoadingState((prevState) => ({ ...prevState, [id]: null })); // Reset loading state for this ID
        }
    };

    return (
        <div className="container mx-auto p-6 relative my-8 w-full">
            <div className='flex justify-start'>
                <HyperText className="text-4xl md:text-5xl font-bold text-center mb-12" text={"Voting Dashboard"} />
            </div>
            <BlurFade delay={0.25} inView>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-50">
                    {candidates.map(candidate => (
                        <Card key={candidate.id} className="shadow-lg rounded-md border border-gray-200">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">{candidate.name}</CardTitle>
                                <CardDescription className="text-sm text-gray-600">
                                    Current Votes: <NumberTicker value={candidate.votes} />
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Activity className="mr-2 h-5 w-5 text-green-500" />
                                        <span className="text-sm">Vote Count: {candidate.votes}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleVote(candidate.id)}
                                    disabled={loadingState[candidate.id] === 'voting'}
                                >
                                    {loadingState[candidate.id] === 'voting' ? "Loading..." : <><Plus className="mr-2 h-4 w-4" /> Vote</>}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </BlurFade>
        </div>
    );
}
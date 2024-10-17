import React, {useEffect, useState} from 'react';
import ScoreboardTitle from "./scoreboard-title";
import "./App.css"
import data from './data.json'

type Team = {
    teamName: string;
    score: number;
    teamMembers?: string[];
}

const PrimaryScore: React.FC<Team> = ({ teamName, score, teamMembers }) => {
    return (
        <div className='bg-score-grey basis-1/3 flex flex-row justify-evenly items-center px-8 py-12'>
            <div className='flex-1'>
                <div className='text-white font-extrabold text-7xl'>
                    {teamName}
                </div>
                <div className='text-white max-w-[80%] text-3xl font-extralight capitalize max'>
                    {teamMembers?.map(name => name.toUpperCase())?.join(', ')}
                </div>
            </div>
            <div className='text-8xl text-white font-extrabold rainbow-text'>
                {score}
            </div>
        </div>
    );
};


const SecondaryScore: React.FC<Team> = ({ teamName, score }) => {
    return (
        <div className='bg-[#DADADA] basis-1/5 border-2 border-score-grey flex flex-row justify-between items-center px-8'>
            <div className='font-extrabold text-5xl text-score-grey'>
                {teamName}
            </div>
            <div className='text-score-grey font-extrabold text-7xl'>
                {score}
            </div>
        </div>
    );
};

function App() {
    const [winnerTeam, setWinnerTeam] = useState<Team>()
    const [firstTeam, setFirstTeam] = useState<Team>()
    const [secondTeam, setSecondTeam] = useState<Team>()
    const [thirdTeam, setThirdTeam] = useState<Team>()

    useEffect(() => {
        setWinnerTeam(data[0])
        setFirstTeam(data[1])
        setSecondTeam(data[2])
        setThirdTeam(data[3])
    }, [])

    return (
        <div className='flex flex-col h-screen w-screen p-8'>
            <ScoreboardTitle/>
            <div
                className='flex flex-1 flex-col border-l-[14px] border-r-[14px] border-b-[14px] border-black mix-blend-screen bg-white p-4 gap-4'>
                <PrimaryScore score={winnerTeam?.score ?? 0} teamName={winnerTeam?.teamName ?? 'Team A'} teamMembers={winnerTeam?.teamMembers ?? []}/>
                <SecondaryScore score={firstTeam?.score ?? 0} teamName={firstTeam?.teamName ?? 'Team B'}/>
                <SecondaryScore score={secondTeam?.score ?? 0} teamName={secondTeam?.teamName ?? 'Team C'}/>
                <SecondaryScore score={thirdTeam?.score ?? 0} teamName={thirdTeam?.teamName ?? 'Team D'}/>
            </div>
        </div>
    );
}

export default App;

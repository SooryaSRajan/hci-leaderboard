import React from 'react';

const ScoreboardTitle = () => {
    return (
        <div className='relative w-full'>
            {/* 90% blue background */}
            <div className='absolute top-0 left-0 w-full h-[80%] bg-white'></div>

            {/* 10% red background */}
            <div className='absolute bottom-0 left-0 w-full h-[20%] bg-black'></div>

            {/* Text inside the container, placed at the bottom */}
            <div className='relative h-full flex items-end justify-start mix-blend-difference'>
                <div className='text-8xl text-white font-extrabold m-0'>
                    SCOREBOARD.
                </div>
            </div>
        </div>
    );
};

export default ScoreboardTitle;

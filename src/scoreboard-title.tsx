import React from 'react';

const ScoreboardTitle = () => {
    return (
        <div className='relative w-full'>
            {/* 90% blue background */}
            <div className='absolute top-0 left-0 w-full h-[80%]'></div>

            {/* 10% red background */}
            <div className='absolute bottom-0 left-0 w-full h-[20%] bg-score-grey'></div>

            {/* Text inside the container, placed at the bottom */}
            <div className='relative h-full flex items-end justify-start mix-blend-plus-lighter'>
                <div className='text-8xl text-score-grey font-extrabold m-0'>
                    SCOREBOARD.
                </div>
            </div>
        </div>
    );
};

export default ScoreboardTitle;

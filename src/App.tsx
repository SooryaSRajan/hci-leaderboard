import React from 'react';
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBaHRAnCdFsFp2OuBT5WfaMzNB1oJrf1B8",
    authDomain: "hci-leaderboard.firebaseapp.com",
    projectId: "hci-leaderboard",
    storageBucket: "hci-leaderboard.appspot.com",
    messagingSenderId: "1065622709610",
    appId: "1:1065622709610:web:dd181248668ac5c3d77113"
};

function App() {
    const app = initializeApp(firebaseConfig);

    return (
        <div className='flex flex-col h-screen w-screen p-12'>
            <h1 className='text-8xl text-score-grey font-extrabold'>
                SCOREBOARD.
            </h1>
            <div className='flex flex-1 border-[14px] border-score-grey'>

            </div>
        </div>
    );
}

export default App;
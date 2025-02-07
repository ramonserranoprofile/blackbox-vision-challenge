// components/Results.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./Results.module.scss";


const Results: React.FC = () => {
    const location = useLocation();
    const { score, perfectScore } = location.state || { score: 0, perfectScore: 0 };

    return (
        <div className="results-container">
        <h1>Game Over!</h1>
        <h2>Your Score: {score}</h2>
        <h3>Maximum Possible Score: {perfectScore}</h3>
        <p>Thank you for playing!</p>
        </div>
    );
};

export default Results;
import React from "react";
import styles from "./Results.module.scss";
import { ResultsProps } from "./types";
import { calculatePercentage } from "./utils";

const Results: React.FC<ResultsProps> = ({ score, totalQuestions }) => {
    return (
        <div className={styles.results}>
        <h2>Resultados</h2>
        <p>Tu puntaje: {score} / {totalQuestions} ({calculatePercentage(score, totalQuestions)})</p>
        </div>
    );
};

export default Results;


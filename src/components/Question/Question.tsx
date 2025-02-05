import * as React from "react";
import styles from "./Question.module.scss";
import { QuestionProps } from "./types";
import { shuffleArray } from "./utils";

const Question: React.FC = () => <div className={styles.container}>{`<Question />`}</div>;

export default Question;

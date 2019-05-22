import React from "react";
import AnswerList from "./AnswerList";

const QuestionDetails = ({questionid, userid, title, text, creationdate, tags, score,answers}) => (
    <div>
        <h2>Question</h2>
        <label>questionid: </label>
        <span>{questionid}</span>
        <br />
        <label>userid: </label>
        <span>{userid}</span>
        <br />
        <label>title: </label>
        <span>{title}</span>
        <br />
        <label>text: </label>
        <span>{text}</span>
        <br />
        <label>creationdate: </label>
        <span>{creationdate}</span>
        <br />
        <label>tags: </label>
        <span>{tags}</span>
        <br />
        <label>score: </label>
        <span>{score}</span>
        <br />
        <AnswerList
            answers={answers}/>
    </div>
);

export default QuestionDetails;
import React from "react";

const QuestionDetails = ({questionid, userid, title, text, creationdate, tags, score}) => (
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
    </div>
);

export default QuestionDetails;
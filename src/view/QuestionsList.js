import React from 'react';

const QuestionsList = ({questions, onCreateQuestion,onViewDetails,onAddAnswer}) => (
    <div>
        <h2>Questions</h2>
        <table border = '1'>
            <thead>
                <tr>
                    <th>Title: </th>
                    <th>Text : </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.title}</td>
                            <td>{question.text}</td>
                            <td><button onClick={() => onViewDetails(index)}>View Details</button></td>
                            <td><button onClick={() => onAddAnswer(index)}>Add Answer</button> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <button onClick = {onCreateQuestion}>Ask new Question</button>
    </div>
);

export default QuestionsList;
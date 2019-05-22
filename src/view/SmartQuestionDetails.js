import React, { Component } from 'react';
import model from "../model/model";
import QuestionDetails from "./QuestionDetails";
import answer from "../model/answer";

const mapModelStateToComponentState = (answerState, questionState, props) => ({
    question: questionState.questions[props.match.params.index],
    answer: answerState.answers
})

export default class SmartQuestionDetails extends Component{
    constructor(props){
        super(props);
        this.state = mapModelStateToComponentState(answer.state, model.state,props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(answer.state, model.state, this.props));
        model.addListener("change", this.listener);
        answer.addListener("change", this.listener);
    }

    componentDidUpdate(prev){
        if(prev.match.params.index !== this.props.match.params.index){
            this.setState(mapModelStateToComponentState(answer.statem, model.state, this.props))
        }
    }

    componentWillUnmount(){
        model.removeListener("change", this.listener);
    }

    render(){
        return (
            <QuestionDetails
                questionid={this.state.question.questionid}
                userid={this.state.question.userid}
                title={this.state.question.title} 
                text={this.state.question.text}
                creationdate={this.state.question.creationdate}
                tags={this.state.question.tags}
                score={this.state.question.score}
                answers={answer.listOnQuestionId(this.props.match.params.index)}
                />
        );
    }
}
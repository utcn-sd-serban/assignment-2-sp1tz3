import React, {Component} from "react";
import CreateAnswer from "./CreateAnswer";
import answer from "../model/answer";
import answerPresenter from "../presenter/answerPresenter";

const mapModelStateToComponentState = modelState => ({
    questionid: modelState.newAnswer.questionid,
    text: modelState.newAnswer.text
})

export default class SmartCreateAnswer extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(answer.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        answer.addListener("change", this.listener);
    }

    componentWillUnmount(){
        answer.removeListener("change", this.listener);
    }

    render(){
        return (
            <CreateAnswer
                questionId = {this.state.questionid}
                text = {this.state.text}
                onCreate = {answerPresenter.onCreate}
                onChange = {answerPresenter.onChange}/>
        );
    }
}

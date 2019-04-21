import React, { Component } from 'react';
import model from "../model/model";
import QuestionsList from "./QuestionsList";
import questionListPresenter from "../presenter/questionListPresenter";

const mapModelStateToComponentState = modelState => ({
    questions: modelState.questions,
});

export default class SmartQuestionsList extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount(){
        model.removeListener("change", this.listener);
    }

    render(){
        return (
            <QuestionsList
                questions={this.state.questions}
                onCreateQuestion={questionListPresenter.onCreateQuestion}
                onViewDetails={questionListPresenter.onViewDetails} />
        );
    }
}
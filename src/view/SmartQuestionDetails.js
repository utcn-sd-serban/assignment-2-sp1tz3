import React, { Component } from 'react';
import model from "../model/model";
import QuestionDetails from "./QuestionDetails";

const mapModelStateToComponentState = (modelState, props) => (
    modelState.questions[props.match.params.index]
)

export default class SmartQuestionDetails extends Component{
    constructor(props){
        super(props);
        this.state = mapModelStateToComponentState(model.state,props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        model.addListener("change", this.listener);
    }

    componentDidUpdate(prev){
        if(prev.match.params.index !== this.props.match.params.index){
            this.setState(mapModelStateToComponentState(model.state, this.props))
        }
    }

    componentWillUnmount(){
        model.removeListener("change", this.listener);
    }

    render(){
        debugger;
        return (
            <QuestionDetails
                questionid={this.state.questionid}
                userid={this.state.userid}
                title={this.state.title} 
                text={this.state.text}
                creationdate={this.state.creationdate}
                score={this.state.score}/>
        );
    }
}
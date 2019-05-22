import {EventEmitter} from "events";

class Answer extends EventEmitter{
    constructor(){
        super();
        this.state = {
            answers: [{
                answerId: 0,
                userId: 0,
                questionId: 0,
                text: "blanao"
            },{
                answerId: 1,
                userId: 0,
                questionId: 2,
                text: "asdf"
            }],
            newAnswer:{
                answerId: -1,
                userId: -1,
                questionId: -1,
                text: ""
            },

            loggedUserId: 0
        }
    }

    addAnswer(answerId, questionId, text){
        this.state = {
            ...this.state,
            answers: this.state.answers.concat(
                [{
                    answerId: answerId,
                    userId: this.state.loggedUserId,
                    questionId: questionId,
                    text: text
                }]
            )
        };
        this.emit("change", this.state)
    }

    changeNewAnswerProperty(property, value){
        this.state = {
            ...this.state,
            newAnswer: {
                ...this.state.newAnswer,
                [property]: value
            }
        };
        this.emit("change", this.state)
    }

    listOnQuestionId(questionId){
        return this.state.answers.filter(answer => answer.questionId === questionId);
    }
}
const answer = new Answer();

export default answer;
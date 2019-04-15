import { EventEmitter } from "events";

class Model extends EventEmitter{
    constructor(){
        super();
        this.state = {
            questions: [{
                questionid: 0,
                userid: 0,
                title: "O intrebare legitima",
                text: "Un text de intrebare legitima",
                creationdate: "azi",
                /*tags: [{
                    tagid: 0,
                    title: "pff"
                }, {
                    tagid: 1,
                    title: "este este"
                }],*/
                score:0 
            },{
                questionid: 1,
                userid: 0,
                title: "O intrebare legitima 2",
                text: "Un text de intrebare legitima 2",
                creationdate: "candva",
                /*tags: [{
                    tagid: 0,
                    title: "pff"
                }],*/
                score:0
            }],
            newQuestion:{
                questionid: -1,
                userid: "",
                title: "",
                text: "",
                creationdate: "",
                //tags: [],
                score:-1
            },
           /* tags: [{
                tagid: 0,
                title: "pff"
            },{
                tagid: 1,
                title: "este este"
            }],*/
            loggedUserId: 0
        }
    }

    addQuestion(questionid, title, text, creationdate, score){
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                questionid: questionid,
                userid: this.state.loggedUserId,
                title: title,
                text: text,
                creationdate: creationdate,
                score: score

            }]),
        };
        this.emit("change", this.state);
    }

    removeQuestion(questionid){
        this.state = {
            ...this.state,
            questions: this.state.questions.splice(questionid, 1)
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value){
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const model = new Model();

export default model;
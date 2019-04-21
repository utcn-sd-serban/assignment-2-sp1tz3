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
                tags:["Java", "JDBC"],
                score:0 
            },{
                questionid: 1,
                userid: 0,
                title: "O intrebare legitima 2",
                text: "Un text de intrebare legitima 2",
                creationdate: "candva",
                tags: ["C#"],
                score:0
            }],
            newQuestion:{
                questionid: -1,
                userid: "",
                title: "",
                text: "",
                creationdate: "",
                tags: [],
                score:-1
            },
            loggedUserId: 0
        }
    }

    addQuestion(questionid, title, text, creationdate, tags, score){
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                questionid: questionid,
                userid: this.state.loggedUserId,
                title: title,
                text: text,
                creationdate: creationdate,
                tags: tags,
                score: score

            }]),
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
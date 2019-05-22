import answer from "../model/answer";

var index = 1;

class AnswerPresenter{

    onCreate(){
        answer.addAnswer(
            ++index,
            answer.state.newAnswer.questionId,
            answer.state.newAnswer.text
        );
        answer.changeNewAnswerProperty("answerId", NaN);
        answer.changeNewAnswerProperty("userId", NaN);
        answer.changeNewAnswerProperty("questionId", NaN);
        answer.changeNewAnswerProperty("text", "");
        window.location.assign("#/");
    };

    onChange(property, value){
        answer.changeNewAnswerProperty(property, value);
    }

    onAddAnswer(){
        window.location.assign("#/create-answer");
    }
}

const answerPresenter = new AnswerPresenter();

export default answerPresenter;
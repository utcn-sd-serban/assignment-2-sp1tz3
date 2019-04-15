import model from "../model/model";

var index = 1;
class CreateQuestionPresenter {

    
    onCreate(){
       
        model.addQuestion(
            ++index,
            model.state.newQuestion.title,
            model.state.newQuestion.text,
            "acum",
            0
        );
        model.changeNewQuestionProperty("questionid", NaN);
        model.changeNewQuestionProperty("userid", NaN);
        model.changeNewQuestionProperty("title", "");
        model.changeNewQuestionProperty("text", "");
        model.changeNewQuestionProperty("creationdate", "");
        model.changeNewQuestionProperty("score", NaN);
        window.location.assign("#/");
    }

    onChange(property, value){
        model.changeNewQuestionProperty(property, value); 
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;
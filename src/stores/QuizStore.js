import { decorate } from "mobx";

class QuizStore {
    constructor() {
        this.vragen = {
            v1_1: 2,
            v1_2: 3,
            v1_3: 4,
            v1_4: 1,
            v2_1: 3,
            v2_2: 1,
            v2_3: 2,
            v2_4: 4,
        }
    }


    setAnswer(channel, value){
        this.vragen[channel] = value;

    }

    get answer1() {
        return `${this.vragen.v1}`
    }
};

decorate(QuizStore, {
   
});

export default QuizStore;
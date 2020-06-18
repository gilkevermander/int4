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
            v3_1: 1,
            v3_2: 4,
            v3_3: 3,
            v3_4: 2,
            v4_1: 1,
            v4_2: 2,
            v4_3: 3,
            v4_4: 4
        }
    }

};

decorate(QuizStore, {
   
});

export default QuizStore;
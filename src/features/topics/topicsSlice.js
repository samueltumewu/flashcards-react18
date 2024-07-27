import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const initialStateTopic = {
    '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: ['456']
    }
}

export const topicsSlice = createSlice({
    name: "topics",
    initialState: initialStateTopic,
    reducers: {
        'addTopic': (state, action) => {
            const {id} = action.payload;
            let newTopic = action.payload;
            newTopic.quizIds = [];
            state[id] = newTopic;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) => {
                const {id, topicId} = action.payload;
                if (state[topicId]) {
                    state[topicId].quizIds.push(id);
                }
            })
    }
})

export const selectTopics = (state) => state.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
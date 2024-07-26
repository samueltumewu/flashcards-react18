import { createSlice } from "@reduxjs/toolkit";


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
            let newTopic = action.payload;
            newTopic["quizIds"] = [''];
            state.topics.push(newTopic);
        }
    }
})

export const selectTopics = (state) => state.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
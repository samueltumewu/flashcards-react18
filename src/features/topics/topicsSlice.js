import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

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
            newTopic.quizIds = [''];
            state[id] = newTopic;
        }
    }
})

export const selectTopics = (state) => state.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
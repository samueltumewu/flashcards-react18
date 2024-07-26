import { createSlice } from "@reduxjs/toolkit"

const initialStateQuizzes = {
    '456': {
        id: '456',
        topicId: '123',
        name: 'quiz for example topic',
        cardIds: ['789', '101', '102']
    }
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialStateQuizzes,
    reducers: {
        'addQuiz': (state, action) => {
            const {id} = action.payload;
            state[id] = action.payload;
        }
    }
})

export const selectQuizzes = (state) => state.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
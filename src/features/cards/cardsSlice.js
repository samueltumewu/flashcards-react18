import { createSlice } from "@reduxjs/toolkit"

const initialStateCards = {
    '789': {
        id: '789',
        front: 'front text',
        back: 'back text'
    },
    '101': {
        id: '101',
        front: 'front text',
        back: 'back text'
    },
    '102': {
        id: '102',
        front: 'front text',
        back: 'back text'
    },
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialStateCards,
    reducers: {
        'addCard': (state,action) => {
            const {id} = action.payload;
            state[id] = action.payload;
        }
    }
})

export const selectorCards = (id) => (state) => {
    return state.cards[id];
}
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;
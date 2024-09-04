import { createSlice } from '@reduxjs/toolkit';

interface Square {
    id: string;
    color: string;
}

interface SquareState {
    squares: Square[];
}

const initialState: SquareState = {
    squares: [],
};

export const squareSlice = createSlice({
    name: 'square',
    initialState,
    reducers: {
        addSquare: (state) => {
            const newSquare: Square = {
                id: `${Date.now()}`,
                color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            };
            state.squares.unshift(newSquare);
        },
        removeSquare: (state) => {
            if (state.squares.length > 0) {
                state.squares.pop();
            }
        },
    },
});

export const { addSquare, removeSquare } = squareSlice.actions;

export default squareSlice.reducer;

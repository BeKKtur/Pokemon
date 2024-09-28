import {configureStore} from "@reduxjs/toolkit";
import {pokemonReducer} from "../store/pokemonSlice";

export const store = configureStore({
    reducer: {
        news: pokemonReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
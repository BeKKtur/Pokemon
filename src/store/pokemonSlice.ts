import { Pokemon } from './../types';
import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemon } from "./pokemonThunk";


interface PokemonState {
    pokemons: Pokemon[];
    fetchLoading: boolean
};

const initialState: PokemonState = {
    pokemons: [],
    fetchLoading: false
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.pending, (state) => {
            state.fetchLoading = true
        }).addCase(fetchPokemon.fulfilled, (state, { payload: pokemons }) => {
            state.fetchLoading = false,
            state.pokemons = pokemons
        }).addCase(fetchPokemon.rejected, (state) => {
            state.fetchLoading = false
        });
    }
});

export const pokemonReducer = pokemonSlice.reducer
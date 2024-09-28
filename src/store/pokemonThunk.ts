import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axios";
import { Pokemon } from "../types";

export const fetchPokemon = createAsyncThunk<Pokemon[]>(
    'pokemon/fetchPokemon',
    async () => {
        const response = await axiosApi.get<Pokemon[]>('/');
        return response.data
    }
);
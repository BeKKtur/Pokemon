import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchPokemon } from "../store/pokemonThunk";

const pokemonCard = () => {
    const dispatch = useAppDispatch;
    const pokemons = useAppSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    console.log(pokemons);

    return (
        <>
        </>
    )
}

export default pokemonCard
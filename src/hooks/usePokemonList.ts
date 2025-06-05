import type { Pokemon } from '@/interfaces/Pokemon';
import type { PokemonSummary } from '@/interfaces/PokemonSumary';
import { useInfiniteQuery, type QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';


const API_URL = "https://pokeapi.co/api/v2/pokemon";

interface QueryData {
    pokemons: Pokemon[];
    nextUrl: string | null;
}

interface PaginatedResponse {
    next: string | null;
    results: PokemonSummary[];
}

const fetchPokemonList = async (ctx: QueryFunctionContext): Promise<QueryData> => {
    const url = typeof ctx.pageParam === 'string' ? ctx.pageParam : `${API_URL}?limit=40`
    const res = await axios.get<PaginatedResponse>(url);
    const { results, next } = res.data;

    const pokemons = await Promise.all(
        results.map((p) => axios.get<Pokemon>(p.url).then(res => res.data))
    );

    return {
        pokemons,
        nextUrl: next,
    };
};

export function usePokemonList() {
    const query = useInfiniteQuery<QueryData>({
        queryKey: ['pokemonList'],
        queryFn: fetchPokemonList,
        initialPageParam: undefined,
        getNextPageParam: (prev) => prev.nextUrl
    });

    return {
        ...query,
        list: query.data?.pages.flatMap(page => page.pokemons) ?? []
    }
}
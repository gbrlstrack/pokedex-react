import type { Pokemon } from "../interfaces/Pokemon"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const API_URL = "https://pokeapi.co/api/v2/pokemon"

const fetchData = async ({ queryKey }: { queryKey: [string, string | number] }): Promise<Pokemon> => {
    const [, idOrName] = queryKey;
    const result = await axios.get(`${API_URL}/${idOrName}`)
    const data = result.data;

    return data
}

export function usePokemon(idOrName: string | number) {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['pokemon', idOrName],
        enabled: !!idOrName,
    })
    return { ...query, data: query.data }
}
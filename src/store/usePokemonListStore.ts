import type { Pokemon } from "@/interfaces/Pokemon";
import { create } from "zustand";

interface PokemonListState {
    list: Pokemon[]
    addMoreItems: (newItems: Pokemon[]) => void;
}

export const usePokemonListStore = create<PokemonListState>((set) => ({
    list: [],
    addMoreItems: (newItems: Pokemon[]) => set((state) => ({ list: state.list.concat(newItems) }))
})) 
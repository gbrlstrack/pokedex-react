import type { PokemonType } from "./PokemonTypes";

export interface Pokemon {
    id: number
    height: number
    name: string
    weight: number
    types: [{ type: { name: PokemonType } }]
    sprites: PokemonSprites
}

export interface PokemonSprites {
    front_default: string
    front_shiny: string
    front_female: string
    front_shiny_female: string
    back_default: string
    back_shiny: string
    back_female: string
    back_shiny_female: string
    other?: {
        dream_world?: {
            front_default: string
            front_female: string
        };
        home?: {
            front_default: string
            front_shiny: string
            front_female: string
            front_shiny_female: string
        };
        'official-artwork'?: {
            front_default: string
        };
    };
    versions?: Record<PokemonGeneration, {
        [game: string]: {
            front_default: string
            back_default: string
            front_shiny: string
            back_shiny: string
        };
    }>;
}

type PokemonGeneration =
    | 'generation-i'
    | 'generation-ii'
    | 'generation-iii'
    | 'generation-iv'
    | 'generation-v'
    | 'generation-vi'
    | 'generation-vii'
    | 'generation-viii';
import type { Pokemon } from "@/interfaces/Pokemon";
import TypeChip from "./TypeChip";

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const imageUrl =
        pokemon.sprites.versions?.["generation-v"]["black-white"].front_default ??
        pokemon.sprites.front_default ??
        pokemon.sprites.other?.["official-artwork"]?.front_default;

    return (
        <div className="w-2xs sm:w-44 h-48 rounded-2xl bg-card
        shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 flex flex-col items-center p-3 cursor-pointer
        border shadow-border border-border">
            <div className="w-full flex justify-center">
                <img
                    src={imageUrl}
                    alt={pokemon.name}
                    className="w-24 h-24 object-contain transition-transform duration-300"
                />
            </div>
            <div className="text-center">
                <h3 className="text-base font-bold capitalize text-white">{pokemon.name}</h3>
                <div className="mt-2 flex justify-center gap-2 flex-wrap">
                    {pokemon.types.map((t) => (
                        <TypeChip key={t.type.name} type={t.type.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;

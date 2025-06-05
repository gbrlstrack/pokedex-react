import type { PokemonType } from "@/interfaces/PokemonTypes";

interface TypeChipProps {
    type: PokemonType
}

const typeColors: { [key in PokemonType]?: string } = {
    normal: "from-gray-400 to-gray-500",
    fire: "from-orange-400 to-red-500",
    water: "from-sky-400 to-blue-600",
    electric: "from-yellow-300 to-yellow-500 text-black",
    grass: "from-lime-400 to-green-500",
    ice: "from-cyan-300 to-blue-300 text-black",
    fighting: "from-red-600 to-rose-700",
    poison: "from-purple-500 to-purple-700",
    ground: "from-yellow-600 to-amber-700",
    flying: "from-indigo-300 to-blue-400",
    psychic: "from-pink-400 to-fuchsia-500",
    bug: "from-lime-500 to-green-600 text-black",
    rock: "from-yellow-700 to-yellow-900",
    ghost: "from-violet-600 to-indigo-700",
    dragon: "from-indigo-700 to-purple-800",
    dark: "from-zinc-700 to-gray-900",
    steel: "from-gray-400 to-gray-600",
    fairy: "from-pink-300 to-pink-500 text-black",
}

const TypeChip = ({ type }: TypeChipProps) => {
    const gradient = typeColors[type] ?? "from-gray-300 to-gray-500";
    const lightTypes = ['electric', 'ice', 'bug', 'fairy']
    const isLight = lightTypes.includes(type)
    const textColor = isLight ? 'text-gray-900' : 'text-white'
    return (
        <div className={`w-15 text-xs px-2 py-1 rounded-[8px] font-semibold capitalize ${textColor} bg-gradient-to-r ${gradient}`} >
            {type}
        </div>
    )
}

export default TypeChip
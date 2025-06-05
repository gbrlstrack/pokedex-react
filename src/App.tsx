import './App.css'
import { usePokemonList } from './hooks/usePokemonList';
import PokemonCard from './components/ui/PokemonCard';
import InfiniteScroll from './components/ui/InfiniteScroll';

function App() {
  const { isLoading, list, fetchNextPage } = usePokemonList()

  return (
    <>
      <header className="fixed top-0 w-full bg-red-600 shadow z-10 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Pokédex</h1>
      </header>
      <div className='pt-20 grid justify-items-center sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 bg-background'>
        {list?.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>)}
      </div>
      <InfiniteScroll isLoading={isLoading} loadMore={fetchNextPage} />
    </>
  )
}

export default App

import { useEffect, useState } from "react";

function App() {

  const [pokemonList, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    // console.log(data)
    setLoadMore(data.next)

    function createPokemonObject(result) {
      result.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const pokemonName = await res.json()

        // console.log(pokemon.name)
        // console.log(pokemonName)
        setAllPokemons(currentList => [...currentList, pokemonName])
        // await pokemonList.sort( (a, b) => a.id - b.id )
      })
      // console.log(pokemonList)
    }

    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemon()  
  }, [])

//   const[allPokemons, setAllPokemons] = useState([]) // initializes the variable allPokemons with empty and also defines the function setAllPokemons
//   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20') // initializes the variable loadMore with the url and also defines the function setLoadMore

//   const getAllPokemons = async () => {
//     const res = await fetch(loadMore)
//     const data = await res.json()

//     setLoadMore(data.next)

//     function createPokemonObject(results)  {
//       results.forEach( async pokemon => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//         const data =  await res.json()

//         setAllPokemons( currentList => [...currentList, data])
//         // allPokemons.push(data)
//         // await allPokemons.sort((a, b) => a.id - b.id)
//       })
//       console.log(allPokemons)
//     }
//     createPokemonObject(data.results)
//   }

//  useEffect(() => {
//   getAllPokemons()
//  }, [])

  return (
    <div className="App">
      <h1>Pokémon Evolution</h1>
      
    </div>
  );
}

export default App;

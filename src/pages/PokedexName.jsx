import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import PokedexNameCard from "../components/Pokedex/PokedexNameCard";
import { DoesntExits } from "../components/Pokedex/DoesntExits";
import PokedexLoading from "../components/loading/PokedexLoading";

const PokedexName = () => {
    // para acceder al name del path en el enrutador
    const { name } = useParams()

    // peticion dependiendo del nombre
    const url = ` https://pokeapi.co/api/v2/pokemon/${name}`

    const [pokemon, getPokemonByName, hasError, ,loading] = useFetch(url)

    useEffect(()=> {
        getPokemonByName()
    }, [name])

    // mientras llega la informacion se activara un loader
    if (loading) {
        return (<PokedexLoading/>)
    }

    return (
        <div>
            {
                hasError
                ? <DoesntExits/>
                : (
                    <PokedexNameCard pokemon={pokemon}/>
                )
            }
        </div>
    )
};

export default PokedexName;

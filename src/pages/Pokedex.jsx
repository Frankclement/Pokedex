import { useEffect, useRef, useState } from "react"; // HOOK react
import { useSelector } from "react-redux"; // Estados globales
import { useNavigate } from "react-router-dom"; // enrutadores

import axios from "axios"; // AXIOS
import useFetch from "../hooks/useFetch"; // HOOK
import PokeContainer from "../components/Pokedex/PokeContainer"; // COMPONENTES
// CSS
import "../components/Pokedex/styles/pokedex.css";
import "../components/Pokedex/styles/pokeContainer.css";
import PokedexLoading from "../components/loading/PokedexLoading";
const Pokedex = () => {
    // peticion api de los pokemones
    let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=800";
    const [pokemons, getAllPokemons, , setPokemons, loading] = useFetch(url);

    //estado para hacer paginacion empezando en 1
    const [currentPage, setCurrentPage] = useState(1);
    // cantidad de elementos a mostrar
    const itemsPerPage = 16;

    const indexOfLastItem = currentPage * itemsPerPage; // ultimo value
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // primer value
    const currentItems = pokemons?.results.slice(
        indexOfFirstItem,
        indexOfLastItem
    ); // elementos a mostrar

    // Peticion dependiendo del tipo
    const urlTypes = "https://pokeapi.co/api/v2/type";
    const [types, getAlltypes] = useFetch(urlTypes);

    // almacen de las url option
    const [selectValue, setSelectValue] = useState("all-pokemons");

    // loader para cuando el usuario cambie el tipo de pokemon
    const [loadertype, setLoadertype] = useState(false)

    useEffect(() => {
        if (selectValue === "all-pokemons") {
            getAllPokemons();
        } else {
            setLoadertype(true)
            axios
                .get(selectValue)
                .then((res) => {
                    console.log(res)
                    const data = {
                        results: res.data.pokemon.map(
                            (pokeInf) => pokeInf.pokemon
                        ),
                    };
                    console.log(data)
                    setPokemons(data);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoadertype(false))
        }
    }, [selectValue]); // se ejecuta cada que cambia selec value

    // sirve para desplegar los tipos en las options
    useEffect(() => {
        getAlltypes();
    }, []);

    // nombre del user
    const trainerName = useSelector((states) => states.trainerName);

    // Navegar entre rutas
    const navigate = useNavigate();
    // Busqueda del usuario
    const searchPokemon = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        const inputValue = searchPokemon.current.value.toLowerCase();
        navigate(`/pokedex/${inputValue}`);
        window.scrollTo(0, 0)
    };

    const handleChangeType = (e) => {
        e.preventDefault();
        setSelectValue(e.target.value);
        setCurrentPage(1);
    };

    // PANTALLA DE CARGA 
    if (loading || loadertype) {
        return (<PokedexLoading/>)
    }


    return (
        <div className='pokedex'>
            <header className='pokedex__header'>
                <h3 className='pokedex__nameUser'>Welcome {trainerName}!</h3>
                <figure>
                    <img
                        className='pokedex__pokeball-img'
                        src='/pokeballBackground.svg'
                        alt='pokedex-gris'
                    />
                </figure>
                <h2 className='pokedex__tittle'>
                    What Pokémon are you looking for?
                </h2>
            </header>
            <form className='pokedex__from' onSubmit={handleSubmit}>
                <div className='pokedex__form-div'>
                    <input
                        placeholder='Search Pokémon'
                        className='pokedex__input'
                        ref={searchPokemon}
                        type='text'
                    />
                    <i className=' search bx bx-search-alt'></i>
                </div>
            </form>
                <div className='pokedex__select-content'>
                    <div className="pokedex__select-contenedor">
                        <select
                            className='pokedex__select'
                            onChange={handleChangeType}
                        >
                            <option value={"all-pokemons"}>All pokemons</option>
                            {types?.results.map((typeInf) => (
                                <option key={typeInf.url} value={typeInf.url}>
                                    {typeInf.name}
                                </option>
                            ))}
                        </select>
                        <div className='select__icon-conteiner'>
                            <i className=' select__icon bx bx-chevron-down'></i>
                        </div>
                    </div>
                </div>
            <PokeContainer
                currentItems={currentItems}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />
        </div>
    );
};

export default Pokedex;

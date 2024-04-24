import Paginacion from "./Paginacion";
import PokeCard from "./PokeCard";
const PokeContainer = ({ currentItems, setCurrentPage, currentPage, itemsPerPage }) => {

    return (
        <>
            <div className='pokeContainer'>
                {currentItems?.map((pokemon) => (
                    <PokeCard key={pokemon.name} url={pokemon.url} />
                ))}
            </div>
            <Paginacion 
                setCurrentPage = {setCurrentPage}
                currentPage = {currentPage}
                currentItems = {currentItems}
                itemsPerPage = {itemsPerPage}
            />
        </>
    );
};

export default PokeContainer;

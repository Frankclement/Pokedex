import { useNavigate } from 'react-router-dom';
import '../Pokedex/styles/pokedexNameCard.css'
const PokedexNameCard = ({pokemon}) => {
    const navigate = useNavigate()
    const handleGoback = () => {
        navigate(`/pokedex`);
        window.scrollTo(0, 0)
    }

    return (
        <div className='pokeCard'>
            <header className='pokeCard__header'>
                <button className='pokeCard__btnBack' onClick={handleGoback}>
                    <i className='pokeCard__icon-back bx bxs-chevron-left'></i>
                </button>
                <h3>#{pokemon?.id}</h3>
                <i className='pokeCard__icon-cora bx bxs-heart'></i>
                <img className='pokedex__pokeball-img pokeCard__img--bg' src="./pokeballBackground.svg" alt="pokeball" />
            </header>
            <figure className={`pokeCard__content-img`}>
                    <img
                        className={`pokeCard__img bgCard-${pokemon?.types[0].type.name}`}
                        src={pokemon?.sprites.other.home.front_default}
                        alt={pokemon?.name}
                    />
            </figure>
            <div className='pokeCard__body'>
                <h2 className='pokeCard__name'>{pokemon?.name}</h2>
                <h3 className='pokeCard__titulo'>Pokémon</h3>
                <ul className='pokeCard__tipo-content'>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.type.name} className={`pokeCard__tipo border-${type.type.name}`}>{type.type.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='pokeCard__stats'>
                <h4 className='pokeCard__stats-tittle'>Stats</h4>
                <ul className='pokeCard__stats-items'>

                    {
                        pokemon?.stats.map(stat => (
                            <li key={stat.stat.url} className='pokeCard__stats-item'>
                            <span className='pokeCard__stats-item--name'>
                                {stat.stat.name.length > 7 ? stat.stat.name.slice(0,9) : stat.stat.name }
                            </span>
                            <span className='pokeCard__stats-item--level'>{stat.base_stat}</span>
                            <span className='pokeCard__stats-item--relleno'>
                                <span 
                                    className={`pokeCard__stats-item--barra`}
                                    style={{width: `${((stat.base_stat * 100)/150 > 150) ? 150 : ((stat.base_stat * 100)/150)}%`}}
                                ></span>
                            </span>
                        </li>
                        ))
                    }
                </ul>
            </div>
            <footer className='pokeCard__footer'>
                <h4 className='pokeCard__stats-tittle'>Abilities</h4>
                <ul className='pokeCard__abilities'>
                    {
                        pokemon?.abilities.map(abilitie => (
                            <li 
                                key={abilitie.slot}
                                className='pokeCard__abilitie'
                            >{abilitie.ability.name}
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </div>
    );
};

export default PokedexNameCard;

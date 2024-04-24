import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainerNameG } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"
import '../components/home/styles/home.css'

const Home = () => {

    const navigate = useNavigate() // se usa para navegar entre rutas
    const userName = useRef() // value del input
    const dispacth = useDispatch() // empaquetador de las actions globales

    // Acceder al enrutador pokedex y almacena el nombre del usuario 
    const handleSubmit = (e) => {
        e.preventDefault()
        dispacth(setTrainerNameG(userName.current.value.trim()))
        userName.current.value = ''
        navigate('/pokedex')
        window.scrollTo(0, 0)
    }


    return (
        <div className="home">
            <div className="home__card">
                <h1 className="home__tittle">
                    <img className="home__img" src="/pokedexTittle.svg" alt="tituloPokedex" />
                </h1>
                <h2 className="home__subtittle">Hi Trainer!</h2>
                <p className="home__presentation">To start in this application please, give me your trainer name.</p>
                <form className="home__form" onSubmit={handleSubmit}>
                    <input minLength="3" placeholder="Name" className="home__input" ref={userName} type="text"/>
                    <button className="home__btn">Start</button>
                </form>
                <footer className="home__footer">
                    <div className="footer__red"></div>
                    <div className="footer__black"></div>
                    <img className="footer__pokeball" src="./pokeball.svg" alt="pokeball" />
                </footer>
            </div>
        </div>
    )
}

export default Home
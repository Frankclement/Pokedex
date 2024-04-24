import { useNavigate } from "react-router-dom";
import './styles/doesntExits.css'
export const DoesntExits = () => {
    const navigate = useNavigate()

    const cerrarModal = () => {
        navigate(`/pokedex/`);
    }

    return (
        <article className='modal'>
            <div className='modal__content'>
                <header className="modal__header">
                    <figure className="modal__img-content">
                        <img src="/imgError.webp" alt="imgError" />
                    </figure>
                    <h2 className="modal__header--tittle">Pokémon no encontrado</h2>
                </header>
                <section className="modal__body">
                    <p className="modal__body--text">Por favor, prueba con otro nombre de Pokémon.</p>
                </section>
                <button className="modal__btn" onClick={cerrarModal}>Cerrar</button>
            </div>
        </article>
    );
};

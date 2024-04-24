import './styles/paginacion.css'
const Paginacion = ({
    setCurrentPage,
    currentPage,
    currentItems,
    itemsPerPage
}) => {
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    
    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    return (
        <div className='pagination'>
            <button className='btn btn__anterior' onClick={goToPreviousPage} disabled={currentPage === 1}>
                Anterior
            </button>
            <span className='numPagination'>{currentPage}</span>
            <button
                className='btn btn__siguiente'
                onClick={goToNextPage}
                disabled={currentItems?.length < itemsPerPage}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Paginacion;

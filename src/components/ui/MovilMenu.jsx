import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Contenedor } from './Reutilizable';
import MenuContext from '../../context/menu/menuContext';

const ContenedorMovilMenu = styled.div`

    border-bottom: solid 2px var(--primario);
    padding: 1rem;
    /* position: fixed; */
    width: 100%;

    @media (min-width: 768px) {
        display: none;
    }
`;

const ContenidoMovilMenu = styled.div`
    display: flex;
    justify-content: space-between;

    i {
        color: var(--primario);
        font-size: 2.5rem;
    }
`;

const MovilMenu = () => {

    //Consumir el Context
    const { mostrarMenu } = useContext(MenuContext);

    return (
        <ContenedorMovilMenu>
            <Contenedor>
                <ContenidoMovilMenu>
                    <button
                        onClick={() => mostrarMenu()}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <button>
                        <i className="fab fa-facebook"></i>
                    </button>
                </ContenidoMovilMenu>
            </Contenedor>
        </ContenedorMovilMenu>
    );
}

export default MovilMenu;
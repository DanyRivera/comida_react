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
        cursor: pointer;
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
                        <a
                            href="https://www.facebook.com/Taqueria-Cristo-Rey-305266880077678/?ref=page_internal"
                            target="_blank"
                            rel="noreferrer"
                        ><i className="fab fa-facebook"></i></a>
                    </button>
                </ContenidoMovilMenu>
            </Contenedor>
        </ContenedorMovilMenu>
    );
}

export default MovilMenu;
import React from 'react';
import styled from '@emotion/styled';
import { Contenedor } from './Reutilizable';

const ContenedorMovilMenu = styled.div`

    border-bottom: solid 2px var(--primario);
    padding: 1rem;

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
    return (
        <ContenedorMovilMenu>
            <Contenedor>
                <ContenidoMovilMenu>
                    <button
                        onClick={() => console.log('Activando sidebar')}
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
import React from 'react';
import styled from '@emotion/styled';
import MenuMain from './MenuMain';
import Imagenes from '../ui/Imagenes';
import { Contenedor } from '../ui/Reutilizable';

const ContenedorMain = styled.main`
    display: grid;
    grid-template-columns: 100%;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 50%);
        align-items: center;
        gap: 5rem;
    }
`;

const Main = () => {
    return (
        <Contenedor>
            <ContenedorMain>
                <MenuMain />
                <Imagenes />
            </ContenedorMain>
        </Contenedor>
    );
}

export default Main;
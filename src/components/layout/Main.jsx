import React from 'react';
import styled from '@emotion/styled';
import MenuMain from './MenuMain';
import Imagenes from '../ui/Imagenes';
import { Contenedor } from '../ui/Reutilizable';

const ContenedorMain = styled.main`
    display: grid;
    margin: 0 auto 5rem auto;
    grid-template-columns: 100%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 50%);
        align-items: center;
        text-align: center;
        margin-bottom: 10rem;
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
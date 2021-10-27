import React from 'react';
import styled from '@emotion/styled';
import Menu from '../layout/Menu';

const ContenedorHero = styled.div`
    background-image: url('/static/img/hero.jpg');
    height: 90vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-attachment: fixed;

    @media (min-width: 768px) {
        height: 100vh;
        background-position: center center;
    }

    &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0, .6);
        position: absolute;
    }

    h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90vh;
        width: 100%;
        justify-content: center;
        color: var(--primario);
        font-size: 5rem;
        position: absolute;
        z-index: 1;
    }
`;

const Hero = () => {
    return (
        <>
            <ContenedorHero>
                <Menu />
                <h1>Texto Aquí!</h1>
            </ContenedorHero>
        </>
    );
}

export default Hero;

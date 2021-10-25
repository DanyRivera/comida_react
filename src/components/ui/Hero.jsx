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
`;

const Hero = () => {
    return ( 
        <ContenedorHero>
            <Menu />
        </ContenedorHero>    
    );
}
 
export default Hero;

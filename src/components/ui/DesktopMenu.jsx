import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

const ContenedorDesktopMenu = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        z-index: 2;
        position: absolute;
        width: 100%;
        padding: 3rem 0;
        border-bottom: solid 1px var(--primario);
    }
`;

const ContenidoDesktopMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 65%;

    a {
        font-size: 3.3rem;
        color: var(--primario);
        cursor: pointer;
        font-family: "Caveat", cursive;
    }
`;

const DesktopMenu = () => {
    return (
        <ContenedorDesktopMenu>
            <ContenidoDesktopMenu>
                <li>
                    <Link
                        to="menu"
                        smooth={true}
                        duration={1000}
                        offset={-50}
                    >Menu</Link>
                </li>
                <li>
                    <Link
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                    >Ubicación</Link>
                </li>
                <li>
                    <Link
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                    >Contacto</Link>
                </li>
            </ContenidoDesktopMenu>
        </ContenedorDesktopMenu>
    );
}

export default DesktopMenu;
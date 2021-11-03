import React from 'react';
import styled from '@emotion/styled';
import { Contenedor } from '../ui/Reutilizable';


const ContenedorFooter = styled.footer`
    background-color: var(--primario);
`;

const ContenidorFooter = styled.footer`
    padding: 2.5rem 0;

    p {
        text-align: center;
        font-size: 2.5rem;
        font-family: "Caveat", sans-serif;
        font-weight: 700;
        color: #fff;
    }
`;

const Footer = () => {

    const date = new Date();
    const Current = date.getFullYear(); 

    return ( 
        <ContenedorFooter>
            <Contenedor>
                <ContenidorFooter>
                    <p>&copy; {Current} La Tabasqueña, Todos los derechos Reservados</p>
                </ContenidorFooter>
            </Contenedor>
        </ContenedorFooter>
     );
}
 
export default Footer;
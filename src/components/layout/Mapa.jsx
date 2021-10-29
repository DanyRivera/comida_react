import React from 'react'
import styled from '@emotion/styled';

const ContenedorMapa = styled.div`

    iframe {
        border: 0;
    } 
`;

const Mapa = () => {
    return (
        <ContenedorMapa>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884313.647380158!2d-98.06099375799992!3d18.05881750405281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfbf61919d99bf%3A0x82d6067b593914d4!2sLa%20Tabasque%C3%B1a!5e0!3m2!1ses-419!2smx!4v1635471776973!5m2!1ses-419!2smx" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
        </ContenedorMapa>
    );
}

export default Mapa;
import React from 'react'
import styled from '@emotion/styled';

const ContenedorImagenes = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        margin-top: 3.5rem;

        img {
            width: 75%;
            height: auto;
            border-radius: 10px;
        }
    }
`;

const Imagenes = () => {
    return ( 
        <ContenedorImagenes>
            <div>
                <img src="/static/img/t-1.jpg" alt="imagen-1" />
            </div>
            <div>
                <img src="/static/img/t-2.jpg" alt="imagen-1" />
            </div>
        </ContenedorImagenes>
     );
}
 
export default Imagenes;
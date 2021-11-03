import React from 'react';
import styled from '@emotion/styled';

const ContenedorMain = styled.div`

    padding: 0 2rem;

    h2 {
        margin: 4rem 0 2.2rem 0;
        text-align: center;
        font-size: 4.7rem;
        font-family: "Caveat", cursive;
    }
`;

const ContenedorMenu = styled.div`
    background-image: url('static/img/bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
    border-radius: 15px;
    padding-bottom: 5rem;
`;

const ContenidoMenu = styled.ul`

    padding: 4.5rem 1.2rem;

    li {
        display: flex;
        color: #fff;
        justify-content: space-around;
        align-items: center;
        font-size: 1.8rem;
        padding-bottom: 4rem;
        font-family: 'Kalam', cursive;

        @media (min-width: 768px) {
            font-size: 2.3rem;
        }

        &:last-of-type {
            padding-bottom: 0;
        }
    }
`;

const MenuMain = () => {
    return (
        <ContenedorMain
            id="menu"
        >
            <h2>Menu</h2>

            <ContenedorMenu>
                <ContenidoMenu>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                    <li>
                        <p>Nombre platillo</p>
                        <p>.....................</p>
                        <p>Precio$$$</p>
                    </li>
                </ContenidoMenu>
            </ContenedorMenu>

        </ContenedorMain>
    );
}

export default MenuMain;
import React from 'react';
import MovilMenu from '../ui/MovilMenu';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    position: absolute;
    width: 100%;
`;

const Menu = () => {
    return ( 
        <ContenedorHeader>
            <MovilMenu />
        </ContenedorHeader>
    );
}
 
export default Menu;
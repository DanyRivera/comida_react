import React from 'react';
import MovilMenu from '../ui/MovilMenu';
import Sidebar from '../ui/Sidebar';
import styled from '@emotion/styled';
import DesktopMenu from '../ui/DesktopMenu';

const ContenedorMenus = styled.header`
    position: absolute;
    width: 100%;
    z-index: 2;
`;

const Menu = () => {

    return ( 
        <>
            <Sidebar/>
            <ContenedorMenus>
                <MovilMenu />
            </ContenedorMenus>
            <DesktopMenu />
        </>
    );
}
 
export default Menu;
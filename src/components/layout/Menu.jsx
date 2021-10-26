import React, {useContext} from 'react';
import MovilMenu from '../ui/MovilMenu';
import Sidebar from '../ui/Sidebar';
import styled from '@emotion/styled';
import MenuContext from '../../context/menu/menuContext';

const ContenedorMenus = styled.header`
    position: absolute;
    width: 100%;
`;

const Menu = () => {

    const {activo} = useContext(MenuContext);

    return ( 
        <>
            { activo && <Sidebar /> }
            <ContenedorMenus>
                <MovilMenu />
            </ContenedorMenus>
        </>
    );
}
 
export default Menu;
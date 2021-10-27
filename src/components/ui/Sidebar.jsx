import React, { useContext } from 'react';
import styled from '@emotion/styled';
import MenuContext from '../../context/menu/menuContext';

const CloseMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 2.2rem;

    i {
        color: #fff;
        font-size: 2.5rem;
    }
`;

const ListadoOpciones = styled.div`
    margin-top: 1rem;

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.5rem 0 1.5rem 2.2rem;
        font-size: 2rem;
        color: #fff;
    }
`;

const Sidebar = () => {

    const { ocultarMenu, activo } = useContext(MenuContext);

    return (

        <div className={activo ? 'sidebar active' : 'sidebar'}>
            <CloseMenu>
                <button
                    onClick={() => ocultarMenu()}
                >
                    <i className="fas fa-times"></i>
                </button>
            </CloseMenu>
            <ListadoOpciones>
                <ul>
                    <li>Menu</li>
                    <li>Ubicación</li>
                    <li>Contacto</li>
                </ul>
            </ListadoOpciones>
        </div>
    );
}

export default Sidebar;

import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import MenuContext from '../../context/menu/menuContext';

const CloseMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 2.2rem;

    i {
        color: #fff;
        font-size: 2.5rem;
        cursor: pointer;
    }
`;

const ListadoOpciones = styled.div`
    margin-top: 1rem;

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2.2rem 0 1.5rem 2.2rem;
        font-size: 3rem;
        color: #fff;
        font-family: "Caveat", sans-serif;
        cursor: pointer;
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
                    <li>
                        <Link
                            to="menu"
                            smooth={true}
                            duration={1000}
                            offset={-100}
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
                </ul>
            </ListadoOpciones>
        </div>
    );
}

export default Sidebar;

import React, {useReducer} from 'react';
import menuReducer from './menuReducer';
import MenuContext from './menuContext';
import {
    MOSTRAR_MENU,
    OCULTAR_MENU
} from '../../types';

const MenuState = props => {

    const initialState = {
        activo: false
    }

    //Dispatch para las funciones
    const [state, dispatch] = useReducer(menuReducer, initialState);

    //Mostrar el menu
    const mostrarMenu = () => {
        dispatch({
            type: MOSTRAR_MENU
        })
    }

    //Ocultar Menu
    const ocultarMenu = () => {
        dispatch({
            type: OCULTAR_MENU
        })
    }

    return (
        <MenuContext.Provider
            value={{
                activo: state.activo,
                mostrarMenu,
                ocultarMenu
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )

}

export default MenuState;
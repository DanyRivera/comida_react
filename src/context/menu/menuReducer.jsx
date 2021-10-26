import {
    MOSTRAR_MENU,
    OCULTAR_MENU
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case MOSTRAR_MENU:
            return {
                ...state,
                activo: true
            }

        case OCULTAR_MENU:
            return {
                ...state,
                activo: false
            }

    }
}
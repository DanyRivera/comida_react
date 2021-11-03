import React from 'react';
import styled from '@emotion/styled';
import { Contenedor } from '../ui/Reutilizable';

const ContenedorCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2.5rem;
    margin: 5rem 0 10rem 0;
    padding: 0 1.5rem;
`;

const Contacto = () => {
    return (
        <Contenedor>

            <h2 className="heading-seccion">Contacto - Dirección - Horarios</h2>

            <ContenedorCards
                id="contacto"
            >
                <div className="card-contacto">
                    <div className="content-card">
                        <h3>Contacto</h3>
                        <div>
                            <ul className="info-contacto">
                                <li><span>Telefono:</span> 545454654</li>
                                <li><span>WhatsApp:</span> 546456564</li>
                                <li><span>Facebook:</span> @usuario</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-direccion">
                    <div className="content-card">
                        <h3>Dirección</h3>
                        <div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem illo exercitationem nihil nesciunt eligendi laborum, porro, rem natus laboriosam mollitia sit voluptatibus quae ullam id iure optio et velit dolor?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-horarios">
                    <div className="content-card">
                        <h3>Horarios</h3>
                        <div>
                            <ul>
                                <li>Lunes: 14:00 - 20:00</li>
                                <li>Martes: 14:00 - 20:00</li>
                                <li>Miércoles: 14:00 - 20:00</li>
                                <li>Jueves: 14:00 - 20:00</li>
                                <li>Viernes: 14:00 - 20:00</li>
                                <li>Sábado: 14:00 - 20:00</li>
                                <li>Domingo: 14:00 - 20:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContenedorCards>
        </Contenedor>
    );
}

export default Contacto;
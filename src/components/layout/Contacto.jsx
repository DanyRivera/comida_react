/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from '@emotion/styled';
import { Contenedor } from '../ui/Reutilizable';

const ContenedorCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 5.5rem;
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
                                <li>
                                    <span>Telefono: </span>
                                    <a
                                        href="tel:+52-221-215-3828"
                                        target="_blank"
                                        rel="noreferrer"
                                    >221 215 3828</a>
                                </li>

                                <li>
                                    <span>WhatsApp: </span>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://api.whatsapp.com/send?phone=522212153828&fbclid=IwAR0OzhJObsdf73aFEclaITKx0IYQLplSo4REBhFQ79ZgY1-kfFqp6aDavwI"
                                    >+52 221 215 3828</a>
                                </li>
                                <li>
                                    <span>Facebook: </span>
                                    <a
                                        href="https://www.facebook.com/Taqueria-Cristo-Rey-305266880077678/?ref=page_internal"
                                        target="_blank"
                                        rel="noreferrer"
                                    >@Taqueria_Cristo_Rey</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-direccion">
                    <div className="content-card">
                        <h3>Dirección</h3>
                        <div>
                            <p>
                                Prolongación 14 Sur #6369 72440 Puebla de Zaragoza, México.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-horarios">
                    <div className="content-card">
                        <h3>Horarios</h3>
                        <div>
                            <ul>
                                <li>Lunes: 16:00 - 23:00</li>
                                <li>Martes: 16:00 - 23:00</li>
                                <li>Miércoles: 16:00 - 23:00</li>
                                <li>Jueves: 16:00 - 23:00</li>
                                <li>Viernes: 14:00 - 23:00</li>
                                <li>Sábado: 14:00 - 23:00</li>
                                <li>Domingo: 14:00 - 23:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContenedorCards>
        </Contenedor>
    );
}

export default Contacto;
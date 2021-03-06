import React from 'react';
import styled from '@emotion/styled';
import { animateScroll as scroll } from 'react-scroll';

const UpScroll = styled.div`
    display: block;
    position: absolute;
    position: fixed;
    bottom: 2.5%;
    right: 3%;
    z-index: 2;
    outline: none;

    button {
        background-color: #e1e1e1;
        padding: 1rem 1.5rem;
        border-radius: 50%;
        -webkit-box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.74);
        -moz-box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.74);
        box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.74);
        transition: all .5s ease;
        cursor: pointer;
        outline: none;
    }
    i {
        font-size: 2rem;
    }
`;

const Up = () => {
    return (
        <UpScroll>
            <button
                onClick={() => scroll.scrollToTop()}
            >
                <i className="fas fa-angle-up"></i>
            </button>
        </UpScroll>
    );
}

export default Up;
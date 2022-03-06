import React, { useCallback, useEffect, useRef, useState } from 'react';

import image1 from '../images/image1.jpg';
import { AiFillCloseCircle } from 'react-icons/ai';

import './AnonymousModal.css'

function AnonymousModal() {

    const [showModal, setShowModal] = useState(true);
    useEffect(
        () => {
            setShowModal(true);
        }, []
    )

    const modal = useRef();
    const closeModal = (event) => {
        if (modal.current === event.target) {
            setShowModal(false);
        }
    }

    const keypress = useCallback(
        (event) => {
            if ((event.key === 'Escape') && showModal) {
                setShowModal(false)
            }
        }, [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keypress);
            return () => document.removeEventListener('keydown', keypress);
        }
    );


    if (showModal) {
        return (
            <div className="start-up-modal-container" ref={modal} onClick={closeModal}>

                <div className="start-up-modal">
                    <AiFillCloseCircle className="close-modal-button" onClick={() => { setShowModal(false) }} />
                    <img className="start-up-modal-image" src={image1} />
                    <div className="sponsor-student-button">Sponsor a Student</div>
                </div>

            </div>
        )
    }
    else { return null }
}

export default AnonymousModal;
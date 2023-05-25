import React from 'react';

function Modal(props) {
    const handleClose = () => {
        props.onClose?.();
    };
    return (
        <div>
            <button className='button close' type='button' onClick={handleClose}>close</button>
        </div>
    );
}

export default Modal;
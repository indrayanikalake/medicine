import React, { Fragment } from "react";
import { createPortal } from "react-dom";


import classes from './Modal.module.css'

const Backdrop=()=>{
    return(
        <div className={classes.Backdrop}>

        </div>
    )
}
const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}

            </div>

        </div>
    )
}
const PortalElement=document.getElementById("play");
const Modal=(props)=>{
    return <Fragment>
        {createPortal(<Backdrop />,PortalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </Fragment>
}

export default Modal;
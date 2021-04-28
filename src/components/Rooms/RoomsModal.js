import React, {useEffect, useState} from 'react';
import axios from "axios";

import {makeStyles} from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";

import Close from "@material-ui/icons/Close";

import modalStyle from "../../jss/modalStyle.js";
import SectionCarousel from "../Layout/SectionCarousel";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(modalStyle);

const roomsAPI = "http://localhost:8080/vila/v1/rooms/";

function RoomsModal({ open, close, filter }) {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const filterCodes = {"Toate": "all", "Single": "type/1", "Double": "type/2"};
    useEffect(() => {
        axios.get(roomsAPI + filterCodes[filter]).then(response => setRooms(response.data))
        // eslint-disable-next-line
    }, [filter]);
    return (
        <Dialog
            classes={{
                root: classes.center,
                paper: classes.modal
            }}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={close}
            aria-labelledby="modal-slide-title"
            aria-describedby="modal-slide-description"
        >
            <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
            >
                <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={close}
                >
                    <Close className={classes.modalClose} />
                </IconButton>
                <h4 className={classes.modalTitle}>Camere: {filter}</h4>
            </DialogTitle>
            <DialogContent
                id="modal-slide-description"
                className={classes.modalBody}
            >
                <SectionCarousel rooms={rooms} close={close} />
            </DialogContent>
        </Dialog>
    );
}

export default RoomsModal;
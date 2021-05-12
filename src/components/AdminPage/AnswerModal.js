import React, { useState } from "react";
import axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Input from "@material-ui/core/Input";

import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const answerApi = "http://localhost:8080/vila/v1/messages/answer";

function AnswerModal(props) {
    const [answer, setAnswer] = useState("");

    const headers = {
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const form = {
            "messageId": props.message.id,
            "answer": answer
        }
        axios.post(answerApi, form, headers)
            .then((res) => {
                if(res.status === 200) {
                    props.close();
                    setTimeout(() => {
                        window.location.reload();;
                    }, 1000);
                }
            })
            .catch((err) => {
                if(err.response) {
                    console.log(err)
                }
            })
    };

    return(
        <Dialog
            open={props.open}
            keepMounted
            onClose={props.close}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
            >
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={props.close}
                >
                    <Close />
                </IconButton>
                <h4>{props.message.name}{" - "}{props.message.email}</h4>
            </DialogTitle>
            <DialogContent
                id="classic-modal-slide-description"
            >
                <p>Message:{" "}{props.message.message}</p>
                <Input onChange={ (e) => setAnswer(e.target.value) } />
            </DialogContent>
            <DialogActions
            >
                <Button color="default" onClick={onSubmit}>
                    Answer
                </Button>
                <Button
                    onClick={props.close}
                    color="primary"
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AnswerModal;
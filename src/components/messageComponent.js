import React, {Component} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import {handleClose} from "../actions/messageComponentActions"

class MessageComponent extends Component {
    render() {
        const { show, message, actionOnClose } = this.props;

        return (
            <Modal show={show} animation={false}>
                <ModalHeader>
                    <ModalTitle>Message</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    { message }
                </ModalBody>
                <ModalFooter>
                    <Button bsStyle="primary" onClick={actionOnClose}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.messageReducer.isVisible,
        message: state.messageReducer.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionOnClose: () => {dispatch(handleClose())}
    }
}

export default MessageComponent = connect(mapStateToProps, mapDispatchToProps)(MessageComponent);
import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {fetchAddCatalog, addUserCatalogRequested} from "../actions/catalogAction";
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";

class CatalogCreatorComponent extends Component {

    render() {
        const {showAddNewCatalogWindow, handleAddCatalog, handleClickUnselected} = this.props;

        const renderFull = () => {
            return (
                <Modal show={showAddNewCatalogWindow} animation={false} onHide={handleClickUnselected}>
                    <form onSubmit={(event) => {
                            event.preventDefault();
                            handleAddCatalog(event);
                        }
                    }>
                        <Modal.Header>
                            <Modal.Title className="modal-catalog-container">
                                Catalog creator
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="title-label">Title:</div>
                            <input type="text" id="title-input"/>

                            <div className="description-label"><br/>Description:</div>
                            <input type="text" id="description-input"/>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button type="submit" bsStyle="primary">Add</Button>
                            <Button bsStyle="outline-primary" onClick={handleClickUnselected}>Close</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            )
        };

        const renderEmpty = () => {
            return (
                <div></div>
            )
        };

        let renderComponent = '';
        showAddNewCatalogWindow ? renderComponent = renderFull() : renderComponent = renderEmpty();

        return renderComponent;
    }
}

const mapStateToProps = (state) => {
    return {
        showAddNewCatalogWindow: state.catalogReducer.showAddNewCatalogWindow
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddCatalog: (event) => {
            const INDEX_INPUT_TITLE = 0;
            const INDEX_INPUT_DESCRIPTION = 1;
            let title = event.target.querySelectorAll("input").item(INDEX_INPUT_TITLE).value;
            let description = event.target.querySelectorAll("input").item(INDEX_INPUT_DESCRIPTION).value;
            dispatch({type: 'ADD_USER_CATALOG_REQUESTED',
            title,
            description});
        },

        handleClickUnselected: () => dispatch({type: 'SHOW_ADD_NEW_CATALOG', showAddNewCatalogWindow: false})
    };
};

export default CatalogCreatorComponent = connect(mapStateToProps, mapDispatchToProps)(CatalogCreatorComponent);
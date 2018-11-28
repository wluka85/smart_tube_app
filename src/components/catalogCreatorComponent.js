import React, {Component} from "react";
import '../css/catalogCreator.css';
import connect from "react-redux/es/connect/connect";
import {fetchAddCatalog} from "../actions/catalogAction";

class CatalogCreatorComponent extends Component {

    render() {
        const {showAddNewCatalogWindow, handleAddCatalog, handleClickUnselected} = this.props;

        const renderFull = () => {
            return (
                <div className="modal-window" onClick={(event) => {handleClickUnselected(event)}}>
                    <form onSubmit={(event) => {
                            event.preventDefault();
                            handleAddCatalog(event);
                        }
                    }>
                        <div className="modal-catalog-container">
                            <div className="title-label">Title:</div>
                            <input type="text" id="title-input"/>
                            <div className="description-label">Description:</div>
                            <input type="text" id="description-input"/>
                            <input type="submit" className="button-add" value="Add"/>
                        </div>
                    </form>
                </div>
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
            dispatch(fetchAddCatalog(title, description));
        },

        handleClickUnselected: (event) => {
            if (event.target.className === 'modal-window') {
                dispatch({type: 'SHOW_ADD_NEW_CATALOG', showAddNewCatalogWindow: false})
            }
        }
    };
};

export default CatalogCreatorComponent = connect(mapStateToProps, mapDispatchToProps)(CatalogCreatorComponent);
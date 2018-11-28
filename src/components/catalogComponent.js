import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {deleteCatalog, fetchUserCatalogs} from "../actions/catalogAction";
import '../css/catalog.css';
import {fetchCurrentPlaylist} from "../actions/playlistAction";

class CatalogComponent extends Component {

    render() {
        const {accessToken, catalogList, handleActionAddNew, handleDeleteCatalog, handleDisplayPlaylist} = this.props;
        let addNewButtonComponent;
        if (accessToken.length > 0) {
            addNewButtonComponent = (
                <div id="add-new" onClick={handleActionAddNew}>Add new</div>
            );
        }

        const catalogComponent = (playlist, i, id, title) => {
            return (
                <div className="catalog-component" key={i}>
                    <div className="catalog-name" onClick={() => {handleDisplayPlaylist(playlist)}}>{ title }</div>
                    <i className="fas fa-trash-alt" onClick={() => {handleDeleteCatalog(id)}}/>
                </div>
            )
        };

        const catalogComponentList =(
                <React.Fragment>
                    {catalogList.map((element, i) => {
                        return catalogComponent(element, i, element.id, element.title)})
                    }
                </React.Fragment>
        );

        return (
            <div id="catalog-container">
                {catalogComponentList}
                {addNewButtonComponent}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authReducer.accessToken,
        catalogList: state.catalogReducer.catalogList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDisplayCatalogs: () => dispatch(fetchUserCatalogs()),
        handleActionAddNew: () => dispatch({type: 'SHOW_ADD_NEW_CATALOG', showAddNewCatalogWindow: true}),
        handleDeleteCatalog: (playlistId) => {
            dispatch(deleteCatalog(playlistId));
        },
        handleDisplayPlaylist: (playlist) => {
            dispatch(fetchCurrentPlaylist(playlist));
        }
    };
}

export default CatalogComponent = connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);
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
                <li className="catalog-item">
                    <div className="btn btn-outline-primary btn-sm add-new-btn btn-sets" onClick={handleActionAddNew}>Add new</div>
                </li>
            );
        }

        const catalogComponent = (playlist, i, id, title) => {
            return (
                    <li className="catalog-item" key={i}>
                        <div className="btn btn-outline-primary btn-sm catalog-name btn-sets" onClick={() => {handleDisplayPlaylist(playlist)}}>{ title }</div>
                        <div className="btn btn-outline-primary btn-sm btn-sets"  onClick={() => {handleDeleteCatalog(id)}}>
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </li>
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
            <div className="col-md-3 col-lg-2 sidebar left-sidebar">
                <ul className="nav nav-sidebar">
                    {catalogComponentList}
                    {addNewButtonComponent}
                </ul>
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
import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {fetchUserCatalogs} from "../actions/catalogAction";
import '../css/catalog.css';

class CatalogComponent extends Component {

    render() {
        const {accessToken, catalogList, handleDisplayCatalogs} = this.props;

        const catalogComponent = (id, title) => {
            return (
                <div className="catalog-component">
                    <div className="catalog-name">{ title }</div>
                    <i className="fas fa-trash-alt"/>
                </div>
            )
        };

        const catalogComponentList =(
                <React.Fragment>
                    {catalogList.map((element) => {
                        return catalogComponent(element.id, element.title)})
                    }
                </React.Fragment>
        );

        return (
            <div id="catalog-container">
                {catalogComponentList}
                {/*<div id="add-new" onClick={this.handleAddNewCatalog.bind(this)}>Add new</div>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authReducer.accessToken,
        catalogList: state.catalogReducer.catalogList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDisplayCatalogs: () => dispatch(fetchUserCatalogs()),
    };
};

export default CatalogComponent = connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);
import React, {Component} from "react";
// import CatalogComponent from "./catalogComponent";
import connect from "react-redux/es/connect/connect";
import {fetchUserCatalogs} from "../actions/catalogAction";

class CatalogContainer extends Component {

    componentDidMount() {
        const {accessToken, catalogList, handleDisplayCatalogs} = this.props;
        if (accessToken.length > 0) {
            handleDisplayCatalogs();
        }
    }

    render() {
        const {accessToken, catalogList, handleDisplayCatalogs} = this.props;

        return (
            <div id="catalog-container">
                {/*{this.getCatalogs()}*/}
                {/*<div id="add-new" onClick={this.handleAddNewCatalog.bind(this)}>Add new</div>*/}
            </div>
        )
    }

    // getCatalogs() {
    //     return (
    //         <React.Fragment>
    //             {this.state.catalogs.map((element, i) => {
    //                 return (<CatalogComponent key={i}
    //                                           id={element.id}
    //                                           name={element.title}
    //                                           publishedAt={element.publishedAt}
    //                                           // catalogAction={this.handleDisplayCatalog.bind(this)}
    //                                           // deleteAction={this.handleDeleteCatalog.bind(this)}
    //                 />)
    //             })}
    //         </React.Fragment>
    //     )
    // }
}

const mapStateToProps = (state) => {
    console.log(state)
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

export default CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
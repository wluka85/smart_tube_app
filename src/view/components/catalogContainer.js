import React, {Component} from "react";
import CatalogComponent from "./catalogComponent";

export default class CatalogContainer extends Component {

    constructor(props) {
        super();
        this.controller = props.controller;
        this.controller.model.attach(this);
        this.state = {
            catalogs: []
        }
        this.handleRefreshCatalogs();
    }

    render() {
        return (
            <div id="catalog-container">
                {this.getCatalogs()}
                <div id="add-new" onClick={this.handleAddNewCatalog.bind(this)}>Add new</div>
            </div>
        )
    }

    handleRefreshCatalogs() {
        this.controller.searchUserCatalogs();
    }

    handleDeleteCatalog(etag) {
        this.controller.deleteCatalog(etag);
    }

    handleDisplayCatalog(etag) {
        this.controller.getPlaylist(etag);
    }

    handleAddNewCatalog() {
        this.controller.showModalCatalogCreator();
    }

    getCatalogs() {
        return (
            <React.Fragment>
                {this.state.catalogs.map((element, i) => {
                    return (<CatalogComponent key={i}
                                              id={element.id}
                                              name={element.title}
                                              publishedAt={element.publishedAt}
                                              catalogAction={this.handleDisplayCatalog.bind(this)}
                                              deleteAction={this.handleDeleteCatalog.bind(this)}
                    />)
                })}
            </React.Fragment>
        )
    }

    update(model) {
        this.setState({catalogs: model.catalogs});
    }
}
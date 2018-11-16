import React, {Component} from "react";
import '../../css/catalog.css';

export default class CatalogComponent extends Component {

    render() {
        return (
            <div className="catalog-component">
                <div className="catalog-name" onClick={() => {this.props.catalogAction(this.props.id)}}> {this.props.name}</div>
                <i className="fas fa-trash-alt" onClick={() => {this.props.deleteAction(this.props.id)}}/>
            </div>
        )
    }
}


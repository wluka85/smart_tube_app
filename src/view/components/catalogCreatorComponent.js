import React, {Component} from "react";
import '../../css/catalogCreator.css';

export default class CatalogCreatorComponent extends Component {

    constructor(props) {
        super()
        this.controller = props.controller;
        this.controller.model.attach(this);
        this.state = {
            shouldBeShown: false
        }
    }

    handleClickUnselected(event) {
        if (event.target.className === 'modal-window') {
            this.controller.hideAddCatalogWindow();
        }
    }

    render() {
        let renderComponent = '';
        this.state.shouldBeShown === true ? renderComponent = this.renderFull.bind(this) : renderComponent = this.renderEmpty;

        return renderComponent();
    }

    renderFull() {
        return (
            <div className="modal-window" onClick={(event) => this.handleClickUnselected(event)}>
                <div className="modal-catalog-container">
                    <div className="title-label">Title:</div>
                    <input id="title-input"/>
                    <div className="description-label">Description:</div>
                    <input id="description-input"/>
                    <div className="button-add" onClick={this.handleAddCatalog.bind(this)}>Add</div>
                </div>
            </div>
        )
    }

    renderEmpty() {
        return (
            <div></div>
        )
    }

    handleAddCatalog() {
        let title = document.getElementById('title-input').value;
        let description = document.getElementById('description-input').value;
        this.controller.addNewPlaylist(title, description);
    }

    update(model) {
        this.setState({shouldBeShown: model.shouldBeShownCatalogCreator});
    }
}
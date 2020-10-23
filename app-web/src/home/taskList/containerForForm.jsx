import React, {Component} from "react";
import FocusTrap from 'focus-trap-react';

import ReactDOM from 'react-dom';
import Form from "./form";

export class ContainerForForm extends Component {
    state = {isShown: false};

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.props.closeModal();
        }
    };
    onSubmit = () => {

    };

    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return
        this.props.closeModal();
    };

    render() {
        return ReactDOM.createPortal( // ?????
            <FocusTrap>
                <aside
                    tag="aside"
                    role="dialog"
                    tabIndex="-1" // tabIndex of -1 makes it non-focusable
                    aria-modal="true"
                    className="modal-cover"
                    onClick={this.onClickOutside}
                    onKeyDown={this.onKeyDown}
                >
                    <div className="modal-area" ref={n => this.modal = n}>
                        <button
                            ref={this.props.closeButton} // close button
                            aria-label="Close Modal"
                            aria-labelledby="close-modal"
                            className="_modal-close"
                            onClick={this.props.closeModal}>
                            <span id="close-modal" className="_hide-visual">Close</span>
                            <svg className="_modal-close-icon" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                            </svg>
                        </button>
                        <div className="modal-body">
                            <Form onSubmit={this.props.onSubmit}/>
                        </div>
                    </div>
                </aside>
            </FocusTrap>,
            document.body
        );
    }
}

export default ContainerForForm; // global

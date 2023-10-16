import { useReducer } from 'react';
import './modal.css';
export default function Modal(props:any) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {props.children}
          <button type="button" onClick={props.closeModal}>
            Close
          </button>
        </section>
      </div>
    );
}

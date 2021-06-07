function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      {/* first approach without creating a function and directly calling with props */}
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      {/* other approach calling props after callinf a function */}
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;

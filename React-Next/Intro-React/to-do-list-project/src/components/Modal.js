export default function Modal({ closeHandler }) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="cancel-btn" onClick={closeHandler}>
        Cancel
      </button>
      <button className="btn">Delete</button>
    </div>
  );
}

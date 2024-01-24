export default function ModalContent({ onClick }) {
  return (
    <div className="modal">
      <div>I'm a modal rendered outside the root DOM</div>
      <button onClick={onClick}>Close</button>
    </div>
  );
}
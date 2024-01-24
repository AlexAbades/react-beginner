import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
  // const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  
  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )} */}
      <h1>Number of clicks: {count}</h1>

      {createPortal(
        <ModalContent onClick={()=>setCount(count + 1)} />,
        document.body
      )}
    </>
  );
}

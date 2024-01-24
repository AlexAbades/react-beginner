import React from "react";
import { createPortal } from 'react-dom';

export default function PortalDemo() {
  return createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById('portal-root')
  )
}

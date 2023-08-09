import { useEffect } from 'react';
import { WebGLRenderer } from 'three';
// The WebGL renderer displays your beautifully crafted scenes using WebGL.

export function usePointerLockControls(gl: WebGLRenderer, handleMove: (e: PointerEvent) => void) {
  useEffect(() => {
    // WebGLRenderer.domElement: A canvas where the renderer draws its output.
    // Document.pointerLockElement: provides the element set as the target for mouse events while the pointer is locked. Return null if lock is pending, pointer is unlocked, or the target is in another document
    // .requestPointerLock: method lets you asynchronously ask for the pointer to be locked on the given element
    function handleClick() {
      if (document.pointerLockElement !== gl.domElement) {
        gl.domElement.requestPointerLock?.();
      }
    }

    // pointermove: fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action
    function handleLockChange() {
      if (document.pointerLockElement) {
        gl.domElement.addEventListener('pointermove', handleMove);
      } else {
        gl.domElement.removeEventListener('pointermove', handleMove);
      }
    }

    // pointerlockchange: fired when the pointer is locked/unlocked
    gl.domElement.addEventListener('click', handleClick);
    document.addEventListener('pointerlockchange', handleLockChange);

    return () => {
      gl.domElement.removeEventListener('click', handleClick);
      gl.domElement.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerlockchange', handleLockChange);
    };
  }, [gl, handleMove]);
}

import React, { useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import useDialogFocus from './useDialogFocus';
function Dialog({ ready, close, active = true }) {
  const ref = useRef(null);
  useDialogFocus(ref, active, close);
  return <div ref={ref} role="dialog" tabIndex={-1}>{ready ? <button>Loaded product</button> : <button>Loading close</button>}</div>;
}
test('Escape still closes after asynchronous content replaces the focused control', () => {
  const close = jest.fn();
  const { rerender } = render(<Dialog ready={false} close={close} />);
  screen.getByText('Loading close').focus();
  rerender(<Dialog ready close={close} />);
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(close).toHaveBeenCalledTimes(1);
});
test('returns focus to the opener on unmount and removes the key listener', () => {
  const opener = document.createElement('button'); document.body.appendChild(opener); opener.focus();
  const close = jest.fn(); const { unmount } = render(<Dialog close={close} />);
  unmount(); expect(document.activeElement).toBe(opener);
  fireEvent.keyDown(document, { key: 'Escape' }); expect(close).not.toHaveBeenCalled(); opener.remove();
});
test('does not intercept keyboard events for other themes', () => {
  const close = jest.fn(); render(<Dialog close={close} active={false} />);
  fireEvent.keyDown(document, { key: 'Escape' }); expect(close).not.toHaveBeenCalled();
});

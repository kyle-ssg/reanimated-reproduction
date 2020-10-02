import React from 'react';

interface Toggle {
  checked: boolean,
  onChange: (event: React.MouseEvent<HTMLElement>) => void,
  children?: React.ReactChildren | Array<string | React.ReactChildren>,
}

const Toggle: React.FC<Toggle> = ({ checked, onChange, children }) => (
    <button
      className={`btn toggle-control d-flex justify-content-center align-items-center ${checked ? "selected" : ""}`}
      onClick={onChange}
      type="button"
    >
        {children}
    </button>
);

Toggle.displayName = "Toggle";
export default Toggle;
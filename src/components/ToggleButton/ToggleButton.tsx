/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import './ToggleButton.scss';

type ToggleProps = {
  status: string;
  setStatus?: Dispatch<SetStateAction<any>>;
  handler?: ChangeEventHandler;
};

function ToggleButton({ ...props }: ToggleProps) {
  const [checked, setChecked] = useState(true);
  return (
    <div className="toggleButton_container">
      <h3>{props.status}</h3>
      <div className="toggleButton">
        <div className="toggleButton_switch">
          <input
            type="checkbox"
            className="checkbox"
            name={props.status}
            id={props.status}
            defaultChecked={checked}
            onChange={(e) => props.setStatus!(e.target.checked)}
          />
          <label htmlFor={props.status} className="label">
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;

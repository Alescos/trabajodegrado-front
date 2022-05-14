import { ChangeEventHandler } from 'react';

type props = {
  //   handleValidation: KeyboardEventHandler;
  handlePasswordChange: ChangeEventHandler<HTMLInputElement>;
  passwordValue: string;
  passwordError: string;
};

function PasswordInputField({
  //   handleValidation,
  handlePasswordChange,
  passwordValue,
  passwordError,
}: props) {
  return (
    <div className="register-password">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Contraseña
      </label>
      <input
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        // onKeyUp={handleValidation}
        name="password"
        placeholder="Password"
        className="form-control"
      />
      <p className="text-danger">{passwordError}</p>
    </div>
  );
}
export default PasswordInputField;

import { ChangeEventHandler } from 'react';

type props = {
  //   handleValidation: KeyboardEventHandler<HTMLInputElement>;
  handlePasswordChange: ChangeEventHandler<HTMLInputElement>;
  confirmPasswordValue: string;
  confirmPasswordError: string;
};
function ConfirmPasswordInputField({
  //   handleValidation,
  handlePasswordChange,
  confirmPasswordValue,
  confirmPasswordError,
}: props) {
  return (
    <div className="form-group my-3">
      <input
        type="password"
        value={confirmPasswordValue}
        onChange={handlePasswordChange}
        // onKeyUp={handleValidation}
        name="confirmPassword"
        placeholder="Password"
        className="form-control"
      />
      <p className="text-danger">{confirmPasswordError}</p>
    </div>
  );
}
export default ConfirmPasswordInputField;

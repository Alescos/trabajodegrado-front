import { FormEventHandler } from 'react';
import { Button } from 'react-bootstrap';
import './MainButton.scss';

type ButtonProps = {
  name: string;
  variant: string;
  evnt: FormEventHandler;
};

function MainButton({ name, variant, evnt }: ButtonProps) {
  return (
    <Button onSubmit={evnt} className="mainButton" variant={variant}>
      {name}
    </Button>
  );
}
export default MainButton;

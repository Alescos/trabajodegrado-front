import { Button } from 'react-bootstrap';
import './MainButton.scss';

type ButtonProps = {
  name: string;
  variant: string;
};
const defaultProps: ButtonProps = {
  name: 'Aceptar',
  variant: 'info',
};

function MainButton({
  name = defaultProps.name,
  variant = defaultProps.variant,
}: ButtonProps = defaultProps) {
  return (
    <Button className="mainButton" variant={variant}>
      {name}
    </Button>
  );
}
export default MainButton;

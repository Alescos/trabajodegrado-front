import Logo from '../Header/logo-app.png';

type props = {
  src?: string;
};

const defaultProps = {
  src: Logo,
};

function Image({ src }: props & typeof defaultProps): JSX.Element {
  return <img src={src} alt="" />;
}

Image.defaultProps = defaultProps;
export default Image;

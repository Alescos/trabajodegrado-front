/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/require-default-props */
/* eslint-disable operator-linebreak */
import { Dispatch, SetStateAction } from 'react';
import { CreateOutline } from 'react-ionicons';
import './ImageCard.scss';

type propTypes = {
  title: string;
  styles?: any;
  setFile: Dispatch<SetStateAction<any>>;
};

function ImageCard({ ...props }: propTypes) {
  return (
    <div className="imageCard">
      <div className="imageCard_content">
        <div className="imageCard_header">
          <div className="imageCard_title">
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className="imageCard_body">
          <div
            className="imageCard_input"
            style={props.styles ? props.styles : null}
          >
            <div className="image_wrapper" />
            <label htmlFor="imageCard_input_image">
              <i>
                <CreateOutline />
              </i>
              <input
                type="file"
                className="imageCard_input_image form-control"
                name="avatar"
                accept=".png, .jpg"
                id="imageCard_input_image"
                onChange={(e) => {
                  props.setFile(e.target.files![0]);
                }}
              />
            </label>
          </div>
        </div>
        <div className="imageCard_description">
          <p>Definir la imagen del area</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;

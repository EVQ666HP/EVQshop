import React from 'react';

const ItemPagePicture = ({ picture }) => {
  const [pictureIndex, SetPictureIndex] = React.useState(0);
  const nextPicture = () => {
    const newPictureIndex = (pictureIndex + 1) % picture.length;
    SetPictureIndex(newPictureIndex);
  };
  return (
    <div className="information-box__img">
      <img onClick={() => nextPicture()} src={picture[pictureIndex]} alt="" />
    </div>
  );
};

export default ItemPagePicture;

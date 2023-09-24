import React from 'react';

const ItemPageDescription = ({ details, SizeFit }) => {
  const [detailsPopup, setDetailsPopup] = React.useState();
  const [SizeFitPopup, setSizeFitPopup] = React.useState();
  const [deliveryPopup, setDeliveryPopup] = React.useState();
  React.useEffect(() => {
    setDetailsPopup(false);
    setSizeFitPopup(false);
    setDeliveryPopup(false);
  }, []);
  return (
    <div className="information-box__details">
      <ul onClick={() => setDetailsPopup(!detailsPopup)}>
        {detailsPopup ? '-Details' : '+Details'}
        {detailsPopup && <li>{details}</li>}
      </ul>
      <ul onClick={() => setSizeFitPopup(!SizeFitPopup)}>
        {SizeFitPopup ? '-Size & fit' : '+Size & fit'}
        {SizeFitPopup && <li>{SizeFit}</li>}
      </ul>
      <ul onClick={() => setDeliveryPopup(!deliveryPopup)}>
        {deliveryPopup ? '-Delivery' : '+Delivery'}
        {deliveryPopup && (
          <>
            <li>FedEx Economy - 18$ 5-10 days</li>
            <li>FedEx Express - 35$ 2-4 working days</li>
            <li>Goods will be dispatched and shipped on and during regular working days.</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ItemPageDescription;

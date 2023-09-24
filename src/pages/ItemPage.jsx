import React from 'react';
// RRD
import { useParams, useNavigate, Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { fetchShopItems } from '../Redux/Slice/ItemsSlice';
import { addItemToCart } from '../Redux/Slice/cartSlice';
import { useSelectorSearch } from '../hooks/useSelector';
// components
import ItemPageDescription from '../components/ItemPageComponents/ItemDescription';
import ItemPagePicture from '../components/ItemPageComponents/ItemPicture';

export const ItemPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, urlCategory } = useParams();
  const { search, status } = useSelectorSearch();
  const [item, setItem] = React.useState();
  const {
    brand = '',
    category = '',
    color = '',
    description = '',
    model = '',
    oldPrice = 0,
    picture = [],
    price = 0,
    size = [],
  } = item || {};

  const [SizePopup, setSizePopup] = React.useState(false);
  const [selectedSize, setSelectedSize] = React.useState('SIZE');

  React.useEffect(() => {
    const firstElement = search.find(
      (item) => item.id === Number(id) && item.gender === urlCategory,
    );
    setItem(firstElement);
    if (status === 'loading' && firstElement === undefined) {
      dispatch(fetchShopItems({ id, urlCategory }));
    } else if (status === 'success' && firstElement === undefined) {
      navigate('/not-found');
    }
    window.scrollTo({ top: 0 });
  }, [search, id, urlCategory, dispatch, navigate, status]);

  const moveItemToCart = (item, img) => {
    item.picture = img;
    dispatch(addItemToCart(item));
  };

  if (status === 'loading') {
    return <>loading...</>;
  }
  return (
    <>
      <svg
        onClick={() => navigate(-1)}
        className="arrow-back"
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        width="30"
        viewBox="0 -960 960 960"
      >
        <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
      </svg>
      <div className="flex-container">
        <ItemPagePicture picture={picture} />
        <div className="information-box__block">
          <h1 className="information-box__title">
            {brand} {model}
          </h1>
          <div className="information-box__price">
            {oldPrice > 0 && <p className="old-price">{`${oldPrice}$`}</p>}
            <p>{price}$</p>
          </div>
          <p className="information-box__description">{description}</p>
          <div className="information-box__size-container">
            <div className="information-box__ul">
              <div
                className="information-box__ul-title"
                onClick={() => {
                  setSizePopup(!SizePopup);
                }}
              >
                <h1>{selectedSize}</h1>
                <div className="information-box__ul-triangle"></div>
              </div>
              {selectedSize === 'PLEASE SELECT SIZE' && (
                <p className="information-box__ul-error">PLEASE SELECT SIZE</p>
              )}
              {SizePopup && (
                <ul>
                  {size.map((size) => (
                    <li
                      onClick={() => {
                        setSelectedSize(size);
                        setSizePopup(!SizePopup);
                      }}
                      key={size}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className="information-box__button"
              onClick={() => {
                if (selectedSize !== 'SIZE') {
                  moveItemToCart({ brand, color, model, price, selectedSize }, picture[0]);
                  setSelectedSize('SIZE');
                } else setSelectedSize('PLEASE SELECT SIZE');
              }}
            >
              ADD TO CART
            </div>
          </div>
          <ItemPageDescription {...item} />
          <div className="more">
            <div className="more__category">
              <span>More from </span>
              <span className="more__url">{brand}</span>
            </div>
            <div className="more-category">
              <span>More </span>
              <Link className="custom-link" to={`/${urlCategory}/?category=${category}`}>
                <span className="more__url">{category}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;

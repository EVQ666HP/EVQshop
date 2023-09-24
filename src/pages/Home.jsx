import React from 'react';
import { useSearchParams } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { fetchShopItems } from '../Redux//Slice/ItemsSlice';
import { specialCategoryArray } from '../constants';
import { useSelectorItems } from '../hooks/useSelector.js';
//components
import Banner from '../components/Banner';
import HomeDescription from '../components/HomeDescription';
import CategoryModule from '../components/CategoryModule';
import SortModule from '../components/SortModule';
import ItemCard from '../components/ItemCard';
import Skeleton from '../components/ItemCard/Skeleton';

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelectorItems();
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  React.useEffect(() => {
    const category = searchParams.get('category');
    const filter = searchParams.get('filter');
    dispatch(fetchShopItems({ category, filter }));
  }, [searchParams, dispatch]);

  return (
    <>
      <Banner />
      <HomeDescription />
      <h1 className="shop-title">SHOP BY ESSENTIALS</h1>
      <div className="flex-container">
        <div className="categories">
          {specialCategoryArray.map((category) => (
            <CategoryModule
              key={category}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
              category={category}
            />
          ))}
        </div>
        <SortModule setSearchParams={setSearchParams} searchParams={searchParams} />
      </div>
      <div className="items-block">
        {status === 'loading'
          ? [...new Array(8)].map((_, indx) => <Skeleton key={indx} />)
          : items.slice(0, 8).map((item) => <ItemCard key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;

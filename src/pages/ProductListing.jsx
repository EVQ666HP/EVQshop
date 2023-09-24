import React from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { fetchShopItems } from '../Redux/Slice/ItemsSlice';
import { HeaderСategories } from '../constants';
import { useSelectorItems } from '../hooks/useSelector';
//components
import CategoryModule from '../components/CategoryModule';
import SortModule from '../components/SortModule';
import ItemCard from '../components/ItemCard';
import Skeleton from '../components/ItemCard/Skeleton';

const ProductListing = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelectorItems();
  const { urlCategory } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const updatedParams = {};
  //categoryArray
  React.useEffect(() => {
    const uniqueCategories = [...new Set(items.map((item) => item.category))];
    setCategoryItem(['ALL', ...uniqueCategories]);
    window.scrollTo({ top: 0 });
  }, [items]);
  const [categoryItem, setCategoryItem] = React.useState(['ALL']);
  //
  const categorySearchParams = searchParams.get('category');
  const filterSearchParams = searchParams.get('filter');
  const urlCategoryLowerCase = urlCategory.toLowerCase();

  React.useEffect(() => {
    if (urlCategoryLowerCase === 'final-sale' || urlCategoryLowerCase === 'new-collection') {
      dispatch(fetchShopItems({ filter: filterSearchParams, category: urlCategory }));
    } else dispatch(fetchShopItems({ filter: filterSearchParams, urlCategory }));
  }, [dispatch, urlCategoryLowerCase, filterSearchParams, urlCategory]);

  if (!HeaderСategories.find((category) => urlCategoryLowerCase === category.url.toLowerCase())) {
    return <Navigate to="/not-found" />;
  }
  return (
    <>
      <div className="flex-container">
        <div className="categories">
          {categoryItem.map((category) => (
            <CategoryModule
              key={category}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
              updatedParams={updatedParams}
              category={category}
            />
          ))}
        </div>
        <SortModule
          updatedParams={updatedParams}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      </div>
      <div className="items-block">
        {status === 'loading'
          ? [...new Array(8)].map((_, indx) => <Skeleton key={indx} />)
          : items
              .filter((item) => {
                const isMatchingCategory =
                  categorySearchParams === null ||
                  categorySearchParams === 'all' ||
                  categorySearchParams.toLowerCase() === item.category.toLowerCase();
                return isMatchingCategory;
              })
              .map((item) => <ItemCard key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default ProductListing;

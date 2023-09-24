import React from 'react';
import { SortingItems } from '../../constants';

const SortModule = ({ searchParams, setSearchParams }) => {
  const [popupStatus, setPopupStatus] = React.useState(false);
  const [title, settitle] = React.useState('Most POPULAR');
  const filter = searchParams.get('filter');

  const setFilter = (sort) => {
    const sortPropertyFetch = sort.sortPropertyFetch;
    const updatedParams = sortPropertyFetch !== 'Most POPULAR' ? { filter: sortPropertyFetch } : {};
    if (searchParams?.get('category')) {
      updatedParams.category = searchParams.get('category');
    }

    setSearchParams(updatedParams);
    settitle(sort.name);
    setPopupStatus(!popupStatus);
  };

  React.useEffect(() => {
    if (filter !== null) {
      const { name } = SortingItems.find((find) => find.sortPropertyFetch === filter);
      settitle(name);
    }
  }, [filter]);

  return (
    <div className="sort-block">
      <p>Sort by</p>
      <p onClick={() => setPopupStatus(!popupStatus)} className="sort-block__selected">
        {title}
      </p>
      {popupStatus && (
        <ul className="sort-block__ul">
          {SortingItems.map((sort) => (
            <li
              key={sort.name}
              onClick={() => {
                setFilter(sort);
              }}
            >
              {sort.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortModule;

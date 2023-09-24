import React from 'react';

const CategoryModule = ({ category, searchParams, setSearchParams }) => {
  //Category
  const categoryLC = category.replace(' ', '-').toLowerCase();
  const categoryParams = (searchParams?.get('category') || '').toLowerCase();
  const updatedParams = categoryLC !== 'all' ? { category: categoryLC } : {};
  // filter
  if (searchParams?.get('filter')) {
    updatedParams.filter = searchParams.get('filter');
  }

  const isActive = categoryParams === categoryLC || (!categoryParams && category === 'ALL');

  return (
    <div
      key={category}
      onClick={() => {
        setSearchParams(updatedParams);
      }}
      className={isActive ? `categories__item categories__item_active ` : 'categories__item'}
    >
      {category}
    </div>
  );
};

export default CategoryModule;

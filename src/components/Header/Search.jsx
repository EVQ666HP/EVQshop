import React from 'react';
//redux
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../../Redux/Slice/ItemsSlice';
import { useSelectorSearch } from '../../hooks/useSelector';
//components
import FoundItem from './FoundItem';
const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState('');
  const [searchStatus, setSearchStatus] = React.useState(false);
  const { search } = useSelectorSearch();
  React.useEffect(() => {
    if (search.length === 0) dispatch(fetchSearch());
  }, [dispatch, search]);

  const searchArray = search
    .filter((el) => {
      const title = `${el.brand} ${el.model}`;
      return title.toLowerCase().includes(searchValue.toLowerCase());
    })
    .map((el) => <FoundItem key={el.id} {...el} />);

  return (
    <div className="icon-block__search-container flex-column">
      <div className="icon-block__search">
        <input
          placeholder="...search"
          value={searchValue}
          onChange={(text) => {
            if (!searchStatus && text.target.value) setSearchStatus(true);
            setSearchValue(text.target.value.trimStart());
          }}
          onFocus={() => {
            !searchStatus && setSearchStatus(true);
          }}
          type="text"
        />
        {searchValue ? (
          <svg
            onClick={() => setSearchValue('')}
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
            <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
          </svg>
        )}
      </div>
      {(searchValue && searchArray.length >= 1 && searchStatus && (
        <div onClick={() => setSearchStatus(false)} className="search-items flex-column">
          {searchArray}
        </div>
      )) ||
        (searchArray.length === 0 && (
          <div className="search-items search-undefined">THIS ITEM IS OUT OF STOCK</div>
        ))}
    </div>
  );
};

export default Search;

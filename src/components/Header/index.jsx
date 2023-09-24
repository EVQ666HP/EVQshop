import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { HeaderСategories } from '../../constants';
import Search from './Search';
import './style.scss';

const Header = () => {
  const { id } = useParams();
  return (
    <div className="header-block">
      <Link to="/" className="custom-link">
        <div className="shop-logo">EVQ</div>
      </Link>
      <div className="category-list">
        {HeaderСategories.map((category) => {
          return (
            <NavLink
              key={category.url}
              to={`/${category.url}`}
              className={({ isActive }) => (isActive && !id ? 'custom-link_active' : 'custom-link')}
            >
              <div className="category-list__item">{category.name}</div>
            </NavLink>
          );
        })}
      </div>
      <div className="icon-block">
        <Search />
        <NavLink to="/profile">
          <div className="icon-block__account">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
              <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
            </svg>
          </div>
        </NavLink>
        <NavLink to="/cart">
          <div className="icon-block__cart">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="30">
              <path d="M120-80v-650h170q0-78 53.5-134T475-920q80.925 0 137.963 55Q670-810 670-730h170v650H120Zm60-60h600v-530H180v530Zm300-290q79 0 137-58t58-137h-60q0 55-40 95t-95 40q-55 0-95-40t-40-95h-60q0 79 58 137t137 58ZM350-730h260q0-55-37.5-92.5T480-860q-55 0-92.5 37.5T350-730ZM180-140v-530 530Z " />
            </svg>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Header;

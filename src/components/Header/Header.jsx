import { selectIsLoggedIn } from 'Redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <div className="user_menu">
          <NavLink to="contacts">Contacts book</NavLink>
          <UserMenu />
        </div>
      ) : (
        <div className="nav_container">
          <NavLink to="Register">Register</NavLink>
          <NavLink to="Login">Log In</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;

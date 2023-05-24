import { logOut } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="user_wraper">
      <p>Привіт! {user.name} </p>
      <p> {user.email} </p>
      <button className="btn" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

import React from 'react';
import { useSelector } from 'react-redux';
import EachUser from './EachUser';
// import { addUser, removeUser } from './usersSlice';
// import styles from './Counter.module.css';

function Users() {
  const { users } = useSelector((store) => store.users);

  return (
    <div>
      {users.map((user) => <EachUser key={user.id} user={user} />)}
    </div>
  );
}

export default Users;

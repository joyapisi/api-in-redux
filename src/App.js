import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Users from './features/user/Users';
import fetchUsers from './features/user/usersSlice';

function App() {
  const { isLoading } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('random'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="App">
      <Users />
    </main>
  );
}

export default App;

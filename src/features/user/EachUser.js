import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser, removeUser } from './usersSlice';

const EachUser = ({ users }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(addUser())}
        >
          add
        </button>
        <span>{users}</span>
        <button
          type="button"
          aria-label="remove value"
          onClick={() => dispatch(removeUser())}
        >
          remove
        </button>
      </div>
    </div>
  );
};

EachUser.propTypes = {
  users: PropTypes.arrayOf.isRequired,
};

export default EachUser;

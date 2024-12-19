import { React, Link, FormatTime } from '../../config/imports';

const UserList = ({ users }) => {
  return (
    <div className="container rounded mt-1">
      {users.length === 0 ? (
        <p>Não há amigos em sua lista.</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-12 mb-3">
              {user.friends.map((friend) => (
                <Link 
                  to={`/chat/${user.id}/${friend.id}`}
                  key={friend.id}
                  className="user-component-link"
                >

                    <div className="card mt-1">
                        <div className="card-body d-flex align-items-center">
                            <img
                                src={friend.avatar || 'default-avatar-url'}
                                alt={friend.name}
                                className="rounded-circle user-component-margin"
                            />

                            <div className="flex-grow-1">
                                <h5 className="card-title">{friend.name}</h5>
                                <p className="card-text text-truncate">aaaa</p>
                            </div>

                            <div className="text-end">
                                <small>
                                {FormatTime(friend.createdAt)}
                                </small>
                            </div>
                        </div>
                    </div>

                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
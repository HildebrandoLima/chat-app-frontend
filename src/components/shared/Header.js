import React from 'react';

function Header() {
  return (
    <div className="container rounded mt-1 list-group-item d-flex justify-content-between">
        <div>
            <h3>Chat</h3>
        </div>

        <div>
            <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                ...
            </button>

            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Tema</a></li>
                <li><a class="dropdown-item" href="#">Perfil</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
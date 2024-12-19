import { React } from '../../config/imports';

function Spinner() {
  return (
    <div className="text-center mt-5">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>

        <p>Carregando...</p>
    </div>
  );
}

export default Spinner;
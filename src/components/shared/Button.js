import { React } from '../../config/imports';

function Button({ title, color, onClick }) {
  const buttonClass = `btn btn-${color} btn-sm`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
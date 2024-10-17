import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const BlueButton = ({ btnLink, btnText }) => {
  return (
    <Link
      to={`/${btnLink}`}>
      {btnText}
    </Link>
  );
};

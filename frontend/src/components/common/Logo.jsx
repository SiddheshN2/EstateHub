import React from "react";
import { Link } from "react-router-dom";
import { RiHomeSmileLine } from "react-icons/ri";
import { logoStyles as s } from "../../style/Styles";

const Logo = ({
  fontSize = "1.5rem",
  iconSize = 24,
  showText = true,
  ...props
}) => {
  return (
    <Link
      to="/"
      {...props}
      className={`${s.link} ${props.className || ""}`}
      style={{ fontSize, ...props.style }}
    >
      <div className={s.iconWrapper}>
        <RiHomeSmileLine size={iconSize} />
      </div>
      {showText && <span className={s.text}>EstateHub</span>}
    </Link>
  );
};

export default Logo;

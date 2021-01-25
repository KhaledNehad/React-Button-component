import React from "react";
import "./Button.css";

import MaterialIcon from "material-icons-react";

const Button = ({
  title,
  variant,
  color,
  size,
  startIcon,
  endIcon,
  disabled,
  disableShadow,
}) => {
  const handleVariant = !variant ? "" : `btn-${variant}-${color}`;
  const handleColor = !color ? "" : `btn-${color}`;
  const handleSize = !size ? "md" : `${size}`;
  const handleIcon = startIcon ? "start-icon" : "" || endIcon ? "end-icon" : "";
  const handleDisabled = disabled ? "btn-disabled" : "";
  const handleDisableShadow = disableShadow ? "no-shadow" : "";

  const classes = `${handleVariant} ${handleColor} ${handleSize} ${handleIcon} ${handleDisabled} ${handleDisableShadow}`;

  return (
    <button className={classes}>
      {startIcon ? (
        <MaterialIcon
          icon={startIcon}
          className={"material-icons md-18"}
          size='tiny'
        />
      ) : (
        ""
      )}

      {title}

      {endIcon ? (
        <MaterialIcon
          icon={endIcon}
          className={"material-icons md-18"}
          size='tiny'
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;

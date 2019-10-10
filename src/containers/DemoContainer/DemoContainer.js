import React from "react";
import useStyles from "./styles";

const DemoContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>Demo container</h3>
    </div>
  );
};

export default DemoContainer;

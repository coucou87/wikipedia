import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Title } from "./StyledComponents";
function Loading() {
  return (
    <Title>
      <CircularProgress />
    </Title>
  );
}

export default Loading;

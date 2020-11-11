import React from "react";
import { Title } from "./StyledComponents";

function ArticleTitle({ title }) {
  return (
    <Title>
      <h1>{title}</h1>
    </Title>
  );
}

export default ArticleTitle;

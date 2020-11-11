import React from 'react'
import {Container, Span} from './StyledComponents';

function Category({categories}) {
    return (
        <Container>
            Categories:{" "}
            {categories.map((category, i) => {
              return !category.hidden ? (
                <Span key={i}>{category.category.split("_").join(" ")}</Span>
              ) : (
                ""
              );
            })}
          </Container>
    )
}

export default Category

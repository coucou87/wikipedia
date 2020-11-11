import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState, useReducer } from "react";
import {
  Header,
  Input,
  Title,
  Container,
  Span,
  List,
  ListItemWrapper,
} from "./StyledComponents";

function reducer(state, action) {
  switch (action.type) {
    case "GOT_DATA":
      return {
        ...state,
        title: action.payload.title,
        sections: action.payload.sections,
        categories: action.payload.categories,
        loading: false,
      };
    case "NOT_FOUND":
      return {
        ...state,
        title: action.payload,
        sections: [],
        categories: [],
        loading: false,
      };

    default:
      return state;
  }
}

function Content() {
  const [value, setValue] = useState("BMW");
  const [{ title, sections, categories, loading }, dispatch] = useReducer(
    reducer,
    {
      title: "null",
      sections: [],
      categories: [],
      loading: true,
    }
  );

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=parse&format=json&formatversion=2&page=${value}`
    )
      .then((res) => res.json())
      .then(({ parse }) => {
        parse
          ? dispatch({
              type: "GOT_DATA",
              payload: parse,
            })
          : dispatch({
              type: "NOT_FOUND",
              payload: "No data found for your search",
            });
      });
  }, [value]);

  return (
    <>
      <Header>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
        />
      </Header>
      {!loading ? (
        <>
          <Title>
            <h1>{title}</h1>
          </Title>
          <Container>
            <List>
              {sections.map((section) => {
                return (
                  <ListItemWrapper
                    indent={section.toclevel}
                    key={section.number}
                  >
                    {`${section.number} ${section.line}`}
                  </ListItemWrapper>
                );
              })}
            </List>
          </Container>
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
        </>
      ) : (
        <Title>
          <CircularProgress />
        </Title>
      )}
    </>
  );
}

export default Content;

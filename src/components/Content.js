import React, { useEffect, useState, useReducer } from "react";
import ArticleTitle from "./ArticleTitle";
import Category from "./Category";
import Loading from "./Loading";
import Table from "./Table";
import { Header, Input } from "./StyledComponents";

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
    let timeOut = setTimeout(() => {
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
    }, 1000);

    return () => {
      clearTimeout(timeOut)
    };
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
          <ArticleTitle title={title} />
          <Table sections={sections} />
          <Category categories={categories} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Content;

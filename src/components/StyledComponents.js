import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: teal;
  display: grid;
  place-items: center;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 50%;
  height: 35px;
  padding: 0 5px;
  font-size: 1rem;
`;
export const Title = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  place-items: center;
`;
export const Container = styled.div`
  width: 1400px;
  max-width: 90%;
  margin: 50px auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Span = styled.span`
  background-color: #ccc;
  padding: 2px 8px;
  border-radius: 30px;
  margin: 5px;
  font-size:.9rem;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItemWrapper = styled.span`
  color: #1177b3;
  display: block;
  padding-left: ${(props) => `${props.indent * 20 - 20}px`};
`;
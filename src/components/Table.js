import React from "react";
import { Container, List, ListItemWrapper } from "./StyledComponents";



function Table({sections}) {
  return (
    <Container>
      <List>
        {sections.map((section) => {
          return (
            <ListItemWrapper indent={section.toclevel} key={section.number}>
              {`${section.number} ${section.line}`}
            </ListItemWrapper>
          );
        })}
      </List>
    </Container>
  );
}

export default Table;

import React from "react";
import { MemoryRouter } from "react-router-dom";

import { BookAIListComponent } from "./BookAIListComponent";

export const BookAIList = (props) => {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <BookAIListComponent {...props} />
    </MemoryRouter>
  );
};

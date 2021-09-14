import React from "react";
import App from "../App";
import { render, fireEvent } from "testing-@testing-library/react-native";

it("Should create an item", () => {
  const { getByText } = render(<App />);

  const addItemButton = getByText("+");
  const textInput = getByPlaceHolderText("Write a task");
});

//create an item
//create multiple items
//delete an item

//should show an error when ever I try to create an invalid todo
//error warning should disapper once a valid item is created

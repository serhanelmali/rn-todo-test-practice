import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react-native";

describe("Component", () => {
  let component;

  beforeEach(() => {
    component = render(<App />);
  });

  it("should create an item", () => {
    const { getByText, getByPlaceholderText } = component;

    const addItemButton = getByText("+");
    const textInput = getByPlaceholderText("Write a task");

    const createdItemText = "first todo";

    fireEvent.changeText(textInput, createdItemText);
    fireEvent.press(addItemButton);

    const createdItem = getByText(createdItemText);

    expect(createdItem).not.toBeNull();
  });

  it("should create multiple items", () => {
    const { getByText, getByPlaceholderText } = component;

    const addItemButton = getByText("+");
    const textInput = getByPlaceholderText("Write a task");

    const createdItemText = "first todo";
    const createdItemText_2 = "second todo";

    fireEvent.changeText(textInput, createdItemText);
    fireEvent.press(addItemButton);

    fireEvent.changeText(textInput, createdItemText_2);
    fireEvent.press(addItemButton);

    const firstCreatedItem = getByText(createdItemText);
    const secondCreatedItem = getByText(createdItemText_2);

    expect(firstCreatedItem).not.toBeNull();
    expect(secondCreatedItem).not.toBeNull();
  });

  it("should delete an item", () => {
    const { getByText, getByPlaceholderText, getByTestId, queryByText } =
      component;

    const addItemButton = getByText("+");
    const textInput = getByPlaceholderText("Write a task");

    const createdItemText = "first todo";

    fireEvent.changeText(textInput, createdItemText);
    fireEvent.press(addItemButton);

    const deleteItemButton = getByTestId("deleteButton");

    fireEvent.press(deleteItemButton);

    const deletedItem = queryByText(createdItemText);

    expect(deletedItem).toBeNull();
  });
});

//TODO
//should show an error when ever I try to create an invalid todo
//error warning should disapper once a valid item is created

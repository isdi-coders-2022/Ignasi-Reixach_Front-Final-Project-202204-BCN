import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { HomePage } from "./HomePage";

describe("Given a HomePape component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: "Dish Week",
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});

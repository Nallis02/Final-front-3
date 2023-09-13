import {  screen } from "@testing-library/react";
import { renderWithReactHookForm } from "dh-marvel/test/form-helper";
import ControlledTextInput from "./ControlledTextInput.component";
import userEvent from "@testing-library/user-event";

describe("Componente ControlledTextInput", () => {
  describe("cuando se muestra por defecto", () => {
    it("debería mostrar una caja de texto", () => {
      renderWithReactHookForm(<ControlledTextInput name="name" label="Name" />);

      const textbox = screen.getByRole("textbox", { name: "Name" });
      expect(textbox).toBeInTheDocument();
      expect(textbox).toHaveValue("");
    });
    it("debería  mostrar el valor por defecto", () => {
      renderWithReactHookForm(
        <ControlledTextInput name="name" label="Name" />,
        { defaultValues: { name: "Test" } }
      );

      const textbox = screen.getByRole("textbox", { name: "Name" });
      expect(textbox).toHaveValue("Test");
    });
    it("should render the button show/hide password when the type is password", () => {
      renderWithReactHookForm(
        <ControlledTextInput name="name" label="Name" type="password" />
      );
      const buttonPassword = screen.getByLabelText(
        "toggle password visibility"
      );

      expect(buttonPassword).toBeInTheDocument();
    });
  });

  describe("cuando el usuario interactúa con una entrada de tipo contraseña", () => {
    it("debería mostrar el botón show/hide contraseña cuando el tipo es contraseña", async () => {
      renderWithReactHookForm(
        <ControlledTextInput name="password" label="Password" type="password" />
      );

      const buttonPassword = screen.getByLabelText(
        "toggle password visibility"
      );
      const input = screen.getByLabelText("Password");
      expect(input).toHaveAttribute("type", "password");

      await userEvent.click(buttonPassword);

      expect(await screen.findByLabelText("Password")).toHaveAttribute(
        "type",
        "text"
      );
    });
  });

  describe("cuando el usuario completa una entrada", () => {
    it("debería  mostrar los datos", async () => {
      renderWithReactHookForm(
        <ControlledTextInput name="name" label="Name" />,
        { defaultValues: { name: "" } }
      );

      const textbox = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Name",
      });

      await userEvent.type(textbox, "Test");
      expect(textbox.value).toBe("Test");
    });

    it("no debería renderizar los datos si la entrada sólo permite números", async () => {
      const regexNumber = /^[0-9]*$/gm;

      renderWithReactHookForm(
        <ControlledTextInput
          name="number"
          label="Number"
          regex={regexNumber}
        />,
        { defaultValues: { number: "" } }
      );

      const textbox = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Number",
      });

      await userEvent.type(textbox, "Test");
      expect(textbox.value).toBe("");
    });
  });

  it("debería renderizar los datos si la entrada sólo permite números", async () => {
    const regexNumber = /^[0-9]*$/gm;

    renderWithReactHookForm(
      <ControlledTextInput name="number" label="Number" regex={regexNumber} />,
      { defaultValues: { number: "" } }
    );

    const textbox = screen.getByRole<HTMLInputElement>("textbox", {
      name: "Number",
    });

    await userEvent.type(textbox, "123456");
    expect(textbox.value).toBe("123456");
  });
});

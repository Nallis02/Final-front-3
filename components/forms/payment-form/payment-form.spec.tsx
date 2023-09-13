import { screen } from "@testing-library/react";
import { renderWithReactHookForm } from "dh-marvel/test/form-helper";
import userEvent from "@testing-library/user-event";
import PaymentForm from "./payment-form.component";

describe("Componente PaymentForm", () => {
  describe("cuando se renderiza por defecto", () => {
    it("debería renderizar todos los campos de entrada", () => {
      renderWithReactHookForm(
        <PaymentForm
          activeStep={1}
          handleNext={() => {}}
          handleBack={() => {}}
        />
      );

      const textboxNumber = screen.getByRole("textbox", {
        name: "Número de la tarjeta",
      });
      const textboxNameOnCard = screen.getByRole("textbox", {
        name: "Nombre como figura en la tarjeta",
      });
      const textboxExpDate = screen.getByRole("textbox", {
        name: "Fecha expiración",
      });
      const textboxCVC = screen.getByLabelText("CVC");

      expect(textboxNumber).toBeInTheDocument();
      expect(textboxNameOnCard).toBeInTheDocument();
      expect(textboxExpDate).toBeInTheDocument();
      expect(textboxCVC).toBeInTheDocument();
    });
  });

  it("debería tener el campo de entrada 'address1' enfocado por defecto", () => {
    renderWithReactHookForm(
      <PaymentForm activeStep={1} handleNext={() => {}} handleBack={() => {}} />
    );

    const textboxName = screen.getByRole("textbox", {
      name: "Número de la tarjeta",
    });
    expect(textboxName).toHaveFocus();
  });

  describe("cuando el usuario completa un campo de entrada", () => {
    it("debería renderizar los datos", async () => {
      renderWithReactHookForm(
        <PaymentForm
          activeStep={1}
          handleNext={() => {}}
          handleBack={() => {}}
        />
      );

      const textboxNumber = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Número de la tarjeta",
      });
      const textboxNameOnCard = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Nombre como figura en la tarjeta",
      });
      const textboxExpDate = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Fecha expiración",
      });
      const textboxCVC = screen.getByLabelText<HTMLInputElement>("CVC");

      await userEvent.type(textboxNumber, "1234567891011213");
      await userEvent.type(textboxNameOnCard, "Name");
      await userEvent.type(textboxExpDate, "1224");
      await userEvent.type(textboxCVC, "123");

      expect(textboxNumber.value).toBe("1234567891011213");
      expect(textboxNameOnCard.value).toBe("Name");
      expect(textboxExpDate.value).toBe("1224");
      expect(textboxCVC.value).toBe("123");
    });
  });
});

import { screen } from "@testing-library/react";
import { renderWithReactHookForm } from "dh-marvel/test/form-helper";
import StepperForm from "./stepper-form.component";
import { comicMock } from "dh-marvel/test/mocks/comic";

describe("Componente StepperForm", () => {
  describe("al renderizar por defecto", () => {
    it("debe mostrar todos los datos", () => {
      renderWithReactHookForm(<StepperForm comic={comicMock} />);
      const steps = [
        "Datos Personales",
        "Dirección de entrega",
        "Datos del pago",
      ];

      const stepperDataI = screen.getByText("Datos Personales");
      const stepperDataII = screen.getByText("Dirección de entrega");
      const stepperDataIII = screen.getByText("Datos del pago");

      expect(stepperDataI).toBeInTheDocument();
      expect(stepperDataII).toBeInTheDocument();
      expect(stepperDataIII).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { checkoutMocked } from "dh-marvel/test/mocks/checkout";
import CardSuccessCheckout from "./card-succes-checkout.component";
import { ICheckout } from "types/index.types";

describe("Componente CardSuccessCheckout", () => {
  describe("debería renderizar el mensaje de la tarjeta", () => {
    it("¡Tu pedido ha sido realizado con éxito!", () => {
      render(<CardSuccessCheckout data={checkoutMocked as ICheckout} />);
      const message = screen.getByText("¡Que disfrutes tu compra!");
      expect(message).toBeInTheDocument();
    });
    it("debería mostrar el título del cómic", () => {
      render(<CardSuccessCheckout data={checkoutMocked as ICheckout} />);
      const title = screen.getByText("Marvel Previews (2017)");
      expect(title).toBeInTheDocument();
    });
    it("debería renderizar la imagen de la tarjeta", () => {
      render(<CardSuccessCheckout data={checkoutMocked as ICheckout} />);
      const image = screen.getByAltText("Marvel Previews (2017)");
      expect(image).toBeInTheDocument();
    });
    it("debería mostrar el nombre del cliente", () => {
      render(<CardSuccessCheckout data={checkoutMocked as ICheckout} />);
      const customerName = screen.getByText(/Test/i);
      expect(customerName).toBeInTheDocument();
    });
    it("debería mostrar la dirección", () => {
      render(<CardSuccessCheckout data={checkoutMocked as ICheckout} />);
      const address = screen.getByText(/Dirección: address 123/i);
      expect(address).toBeInTheDocument();
    });
    it("debería mostrar la dirección", () => {
      render(<CardSuccessCheckout data={checkoutMocked as ICheckout} />);
      const address = screen.getByText(/Dirección alternativa: address 12345/i);
      expect(address).toBeInTheDocument();
    });
  });
});

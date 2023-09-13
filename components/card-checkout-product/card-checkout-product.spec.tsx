import { render, screen } from "@testing-library/react";
import { comicMock } from "dh-marvel/test/mocks/comic";
import { useRouter } from "next/router";
import CardCheckoutProduct from "./card-checkout-product";
import { IComic } from "types/index.types";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
(useRouter as jest.Mock).mockImplementation(() => ({
  push: mockPush,
}));

describe("Componente CardCheckoutProduct", () => {
  describe("cuando se renderiza el componente por defecto", () => {
    it("debería mostrar el título de la tarjeta", () => {
      render(<CardCheckoutProduct comic={comicMock as IComic} />);
      const title = screen.getByText("Marvel Previews (2017)");
      expect(title).toBeInTheDocument();
    });
    it("debería mostrar el ISBN", () => {
      render(<CardCheckoutProduct comic={comicMock as IComic} />);
      const isbn = screen.getByText(/ISBN: 123456/i);
      expect(isbn).toBeInTheDocument();
    });
    it("debería mostrar la imagen de la tarjeta", () => {
      render(<CardCheckoutProduct comic={comicMock as IComic} />);
      const image = screen.getByAltText("Marvel Previews (2017)");
      expect(image).toBeInTheDocument();
    });
    it("debería mostrar el precio", () => {
      render(<CardCheckoutProduct comic={comicMock as IComic} />);
      const price = screen.getByText(/50/i);
      expect(price).toBeInTheDocument();
    });
  });
  describe("al renderizar el componente por defecto con datos indefinidos undifined", () => {
    it("debería mostrar el título del cómic", () => {

      render(<CardCheckoutProduct comic={undefined} />);
      const title = screen.getByTestId("skeleton-title");
      expect(title).toBeInTheDocument();
    });
    it("debería renderizar la imagen de la tarjeta", () => {
      render(<CardCheckoutProduct comic={undefined} />);
      const image = screen.getByTestId("skeleton-image");
      expect(image).toBeInTheDocument();
    });
    it("debería renderizar el precio", () => {
      render(<CardCheckoutProduct comic={undefined} />);
      const price = screen.getByTestId("skeleton-price");
      expect(price).toBeInTheDocument();
    });
  });
});

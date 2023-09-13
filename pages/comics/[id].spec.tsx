import { render, screen } from "@testing-library/react";
import { comicMock } from "dh-marvel/test/mocks/comic";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import Comic from "./[id].page";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
(useRouter as jest.Mock).mockImplementation(() => ({
  push: mockPush,
}));

describe("ComicIDPage", () => {
  describe("al mostrar la página por defecto", () => {
    it("debe obtener los datos", async () => {
      render(<Comic comic={comicMock} />);

      const heading = screen.getByRole("heading", {
        name: "Marvel Previews (2017)",
      });
      expect(heading).toBeInTheDocument();
    });

it("debe obtener los datos", async () => {
      render(<Comic comic={comicMock} />);
      const title = screen.getByText("Marvel Previews (2017)");
      const serie = screen.getByText("Serie: Marvel Previews (2017 - Present)");

      expect(title).toBeInTheDocument();
      expect(serie).toBeInTheDocument();
    });

it("debe obtener los datos", async () => {
      render(<Comic comic={comicMock} />);

      const title = screen.getByText("Marvel Previews (2017)");
      const serie = screen.getByText("Serie: Marvel Previews (2017 - Present)");

      expect(title).toBeInTheDocument();
      expect(serie).toBeInTheDocument();
    });
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkout from "./index.page";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";

const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return {
    basePath: "",
    pathname: "/checkout",
    route: "/checkout?comic=82967",
    query: { comic: "82967" },
    asPath: "/checkout?comic=82967",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
};


describe("ComicIDPage", () => {
  describe("al mostrar la página por defecto", () => {
    it("debe obtener los datos", async () => {
      const router = createMockRouter({
        pathname: "/checkout",
        query: { comic: "82967" },
        route: "/checkout?comic=82967",
      });

      render(
        <RouterContext.Provider value={router}>
          <Checkout />
        </RouterContext.Provider>
      );

      await waitFor(() => {
        const title = screen.getByText("Marvel Previews (2017)");
        expect(title).toBeInTheDocument();
      });
    });
  });
});

import "@testing-library/jest-dom";
import { comic } from "dh-marvel/test/mocks/comic";
import comicWithoutStock from "dh-marvel/test/mocks/comicWithoutStock";
import { server, rest } from "dh-marvel/test/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Comics por id", () => {
  describe("al enviar una petición válida", () => {
    it("debe devolver el estado 200", async () => {
      const serverResponse = await fetch("/marvel/api/comics/1");
      expect(serverResponse.status).toBe(200);
    });

    it("debe devolver los datos simulados de 'comic' cuando id es 10", async () => {
      const serverResponse = await fetch("/marvel/api/comics/1");
      const data = await serverResponse.json();

      expect(data).toEqual(
        expect.objectContaining({ data: { results: [comic] } })
      );
    });
    it("debe devolver datos simulados 'comicWithoutStock' cuando id es 10", async () => {
      const serverResponse = await fetch("/marvel/api/comics/10");
      const data = await serverResponse.json();
      expect(data).toEqual(
        expect.objectContaining({ data: { results: [comicWithoutStock] } })
      );
    });
  });
  describe("al enviar una petición válida", () => {
    it("debería devolver el estado 200", async () => {
      const serverResponse = await fetch("/marvel/api/comics/1");
      expect(serverResponse.status).toBe(200);
    });
    it("debe devolver los datos simulados de 'comic' cuando id es 1", async () => {
      const serverResponse = await fetch("/marvel/api/comics/1");
      const data = await serverResponse.json();

      expect(data).toEqual(
        expect.objectContaining({ data: { results: [comic] } })
      );
    });
    it("debe devolver datos simulados de 'comicWithoutStock' cuando id es 10", async () => {
      const serverResponse = await fetch("/marvel/api/comics/10");
      const data = await serverResponse.json();
      expect(data).toEqual(
        expect.objectContaining({ data: { results: [comicWithoutStock] } })
      );
    });
  });
});

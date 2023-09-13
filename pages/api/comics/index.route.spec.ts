import "@testing-library/jest-dom";
import { comic } from "dh-marvel/test/mocks/comic";
import comicWithoutStock from "dh-marvel/test/mocks/comicWithoutStock";
import { server } from "dh-marvel/test/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cómics", () => {
  describe("al enviar una petición válida", () => {
    it("debe devolver el estado 200", async () => {
      const serverResponse = await fetch("/marvel/api/comics");
      expect(serverResponse.status).toBe(200);
    });
    it("debería devolver datos simulados de 'comic' si no se proporciona ninguna consulta", async () => {
      const serverResponse = await fetch("/marvel/api/comics");
      const data = await serverResponse.json();
      expect(data).toEqual([expect.objectContaining(comic)]);
    });
    it("debería devolver datos simulados 'comicsWithOffsetAndLimit' si se ha proporcionado una consulta", async () => {
      const serverResponse = await fetch(
        "/marvel/api/comics?offset=10&limit=5"
      );
      const data = await serverResponse.json();
      expect(data).toEqual([expect.objectContaining(comicWithoutStock)]);
    });
  });
});

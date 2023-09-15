import { createMocks } from "node-mocks-http";
import handleCheckout, {
  invalidAddress,
  validCard,
  withoutAuthorizationCard,
  withoutFundsCard,
} from "dh-marvel/pages/api/checkout/index.route";

import { ICheckout } from "types/index.types";
import { CARD_DATA_INCORRECT, CARD_WITHOUT_AUTHORIZATION, CARD_WITHOUT_FUNDS, ERROR_INCORRECT_ADDRESS, ERROR_METHOD_NOT_ALLOWED, SERVER_ERROR } from "dh-marvel/components/forms/errors-submit-form";

describe("Checkout", () => {
  describe("al enviar un POST válido, datos de cliente y tarjeta", () => {
    it("debe devolver el estado 200", async () => {
      const order = {
        customer: { address: {} },
        card: { number: validCard },
      } as ICheckout;
      const { req, res } = createMocks({
        method: "POST",
        body: order,
      });
      await handleCheckout(req, res);
      expect(res._getStatusCode()).toBe(200);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining({ data: order })
      );
    });
  });
  describe("al enviar una solicitud no POST", () => {
    it("debe devolver un error 405", async () => {
      const { req, res } = createMocks({
        method: "GET",
      });
      await handleCheckout(req, res);
      expect(res._getStatusCode()).toBe(405);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining(ERROR_METHOD_NOT_ALLOWED)
      );
    });
  });
  describe("al enviar una dirección no válida", () => {
    it("debe devolver un error 400", async () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          customer: { address: { address2: invalidAddress } },
        } as ICheckout,
      });
      await handleCheckout(req, res);
      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining(ERROR_INCORRECT_ADDRESS)
      );
    });
  });
  describe("al enviar un formulario inválido", () => {
    it("debe devolver un error 500", async () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {} as ICheckout,
      });
      await handleCheckout(req, res);
      expect(res._getStatusCode()).toBe(500);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining(SERVER_ERROR)
      );
    });
  });
  describe("al enviar una tarjeta sin fondos", () => {
    it("debe devolver un error 400", async () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          customer: { address: {} },
          card: { number: withoutFundsCard },
        } as ICheckout,
      });
      await handleCheckout(req, res);
      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining(CARD_WITHOUT_FUNDS)
      );
    });
  });
  describe("al enviar una tarjeta sin autorización", () => {
    it("debe devolver un error 400", async () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          customer: { address: {} },
          card: { number: withoutAuthorizationCard },
        } as ICheckout,
      });
      await handleCheckout(req, res);
      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining(CARD_WITHOUT_AUTHORIZATION)
      );
    });
  });
  describe("al enviar una tarjeta con datos no válidos", () => {
    it("debe devolver un error 400", async () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          customer: { address: {} },
          card: { number: "4111" },
        } as ICheckout,
      });
      await handleCheckout(req, res);
      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual(
        expect.objectContaining(CARD_DATA_INCORRECT)
      );
    });
  });
});

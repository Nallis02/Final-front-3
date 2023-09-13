import {createMocks} from 'node-mocks-http';
import handleCheckout, {
    invalidAddress,
    validCard,
    withoutAuthorizationCard,
    withoutFundsCard
} from "dh-marvel/pages/api/checkout.route";
import {CheckoutInput} from "dh-marvel/features/checkout/checkout.types";
import {
    ERROR_CARD_DATA_INCORRECT,
    ERROR_CARD_WITHOUT_AUTHORIZATION,
    ERROR_CARD_WITHOUT_FUNDS,
    ERROR_INCORRECT_ADDRESS,
    ERROR_METHOD_NOT_ALLOWED,
    ERROR_SERVER
} from "dh-marvel/services/checkout/checkout.errors";

describe('Checkout', () => {
    describe('cuando se envía una solicitud POST válida con datos de cliente y tarjeta válidos', () => {
        it('debería devolver un error 400', async () => {
            const order = {customer: {address: {}}, card: {number: validCard}} as CheckoutInput
            const {req, res} = createMocks({
                method: 'POST',
                body: order
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(200)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining({data: order}),
            );
        })
    })
    describe('cuando se envía una solicitud que no es POST', () => {
        it('debería devolver un error 405', async () => {
            const {req, res} = createMocks({
                method: 'GET',
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(405)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_METHOD_NOT_ALLOWED),
            );
        })
    })
    describe('cuando se envía una dirección no válida', () => {
        it('debería devolver un error 400', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {customer: {address: {address2: invalidAddress}}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_INCORRECT_ADDRESS),
            );
        })
    })
    describe('cuando se envía un formulario no válido', () => {
        it('debería devolver un error 500', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(500)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_SERVER),
            );
        })
    })
    describe('cuando se envía una tarjeta sin fondos', () => {
        it('debería devolver un error 400', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {customer: {address: {}}, card: {number: withoutFundsCard}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_CARD_WITHOUT_FUNDS),
            );
        })
    })
    describe('cuando se envía una tarjeta sin autorización', () => {
        it('debería devolver un error 400', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {customer: {address: {}}, card: {number: withoutAuthorizationCard}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_CARD_WITHOUT_AUTHORIZATION),
            );
        })
    })
    describe('cuando se envía una tarjeta con datos no válidos', () => {
        it('debería devolver un error 400', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {customer: {address: {}}, card: {number: '4111'}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_CARD_DATA_INCORRECT),
            );
        })
    })
})
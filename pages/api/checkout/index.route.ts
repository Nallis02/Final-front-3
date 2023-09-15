import type { NextApiRequest, NextApiResponse } from "next";

import { ICheckout } from "types/index.types";
import { CARD_DATA_INCORRECT, CARD_WITHOUT_AUTHORIZATION, CARD_WITHOUT_FUNDS, ERROR_INCORRECT_ADDRESS, ERROR_METHOD_NOT_ALLOWED, SERVER_ERROR } from 'dh-marvel/components/forms/errors-submit-form';
export const invalidAddress = "invalid";
export const validCard = "4242424242424242";
export const withoutFundsCard = "4141414141414141";
export const withoutAuthorizationCard = "4040404040404040";

type Data =
  | {
      data: any;
    }
  | {
      error: string;
      message: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json(ERROR_METHOD_NOT_ALLOWED);
    return;
  }
  try {
    const body: ICheckout = req.body;

    if (body.customer.address.address2 === invalidAddress) {
      res.status(400).json(ERROR_INCORRECT_ADDRESS);
      return;
    }
    if (body.card.number === withoutFundsCard) {
      res.status(400).json(CARD_WITHOUT_FUNDS);
      return;
    }
    if (body.card.number === withoutAuthorizationCard) {
      res.status(400).json(CARD_WITHOUT_AUTHORIZATION);
      return;
    }
    if (body.card.number === validCard) {
      res.status(200).json({ data: body });
      return;
    }
    res.status(400).json(CARD_DATA_INCORRECT);
  } catch (err) {
    res.status(500).json(SERVER_ERROR);
  }
}

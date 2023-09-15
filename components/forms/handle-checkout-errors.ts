import {
  CARD_DATA_INCORRECT,
  CARD_WITHOUT_AUTHORIZATION,
  CARD_WITHOUT_FUNDS,
  ERROR_INCORRECT_ADDRESS,
  SERVER_ERROR,
} from "./errors-submit-form";

type Data = {
  error: string;
  message: string;
};

const catchError = (response: Data) => {
  if (response.error === "DATOS_DE_TARJETA_INCORRECTOS") {
    return CARD_DATA_INCORRECT.message;
  }
  if (response.error === "TARJETA_SIN_FONDOS") {
    return CARD_WITHOUT_FUNDS.message;
  }
  if (response.error === "TARJETA_SIN_AUTORIZACIÓN") {
    return CARD_WITHOUT_AUTHORIZATION.message;
  }
  if (response.error === "DIRECCIÓN_INCORRECTA") {
    return ERROR_INCORRECT_ADDRESS.message;
  }

  return SERVER_ERROR.message;
};

export default catchError;

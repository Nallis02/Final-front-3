export const ERROR_METHOD_NOT_ALLOWED = {
    error: 'MÉTODO_NO_PERMITIDO',
    message: "Método no permitido"
}

export const ERROR_CARD_WITHOUT_FUNDS = {
    error: 'TARJETA_SIN_FONDOS',
    message: "La tarjeta no tiene el saldo necesario para realizar la transferencia"
}

export const ERROR_CARD_WITHOUT_AUTHORIZATION = {
    error: 'TARJETA_SIN_AUTORIZACIÓN',
    message: "La tarjeta no puede autorizar el pago. Por favor, llame a su banco antes de intentarlo nuevamente"
}

export const ERROR_CARD_DATA_INCORRECT = {
    error: 'DATOS_DE_TARJETA_INCORRECTOS',
    message: "Los datos de la tarjeta no son válidos. Por favor, revise sus datos y envíelos nuevamente"
}

export const ERROR_INCORRECT_ADDRESS = {
    error: 'DIRECCIÓN_INCORRECTA',
    message: "Los datos de la dirección no son válidos. Por favor, revise sus datos y envíelos nuevamente"
}

export const ERROR_SERVER = {
    error: 'ERROR_DEL_SERVIDOR',
    message: "Error del servidor. Por favor, inténtelo nuevamente en unos segundos"
}

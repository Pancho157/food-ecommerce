import * as twilio from "twilio";
import logger from "../../../logger/log4js-config";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendNewOrderMessageToAdmin = async (order, customerName) => {
  let total = 0;
  let message = `Nuevo pedido para ${customerName}:`;

  for (let i = 0; i < order.length; i++) {
    message += `\n- Cant: ${order[i].quantity} -- Prod: ${order[i].name} -- Precio: ${order[i].price} \n`;
    total += order[i].price * order[i].quantity;
  }

  message += `\n------ Total: ${total} ------`;

  const body = message;
  const from = `whatsapp:${process.env.TWILIO_NUMBER}`;
  const to = `whatsapp:${process.env.ADMIN_PHONE_NUM}`;

  try {
    await client.messages.create({ to, from, body });
    return { result: true };
  } catch (err) {
    logger.error("No se puedo enviar el mensaje al administrador");
    throw { error: err.message, errorCode: err.status };
  }
};

export default sendNewOrderMessageToAdmin;

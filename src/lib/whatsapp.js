export const WHATSAPP_NUMBER = "15559723543";

export const WHATSAPP_MESSAGE =
  "Hola 😊 me gustaría recibir orientación sobre una prótesis inferior. Quisiera saber cómo podrían ayudarme y cuál sería el siguiente paso.";

export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = getWhatsAppUrl();

export const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
};

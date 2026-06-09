export const WHATSAPP_NUMBER = "15559723543";

export const WHATSAPP_MESSAGE =
  "Hola 😊 me gustaría recibir orientación sobre una prótesis inferior. Quisiera saber cómo podrían ayudarme y cuál sería el siguiente paso.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
};

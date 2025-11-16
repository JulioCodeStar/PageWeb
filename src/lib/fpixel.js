export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? "";

if (typeof window !== "undefined") {
  window.fbq =
    window.fbq ||
    function () {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
  window._fbq = window.fbq;
}

// Vista de página
export const fbPageView = () => {
  if (!window.fbq) return;
  window.fbq("track", "PageView");
};

// Eventos estándar o personalizados
export const fbEvent = (name, options = {}) => {
  if (typeof window === "undefined") return;
  window.fbq?.("track", name, options);
};
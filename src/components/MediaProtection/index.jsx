import { useEffect } from "react";

const PROTECTED_MEDIA_SELECTOR = "img, video";

function isProtectedMedia(target) {
  return target instanceof Element && target.closest(PROTECTED_MEDIA_SELECTOR);
}

export default function MediaProtection() {
  useEffect(() => {
    const preventMediaContextMenu = (event) => {
      if (isProtectedMedia(event.target)) {
        event.preventDefault();
      }
    };

    const preventMediaDrag = (event) => {
      if (isProtectedMedia(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventMediaContextMenu);
    document.addEventListener("dragstart", preventMediaDrag);

    return () => {
      document.removeEventListener("contextmenu", preventMediaContextMenu);
      document.removeEventListener("dragstart", preventMediaDrag);
    };
  }, []);

  return null;
}

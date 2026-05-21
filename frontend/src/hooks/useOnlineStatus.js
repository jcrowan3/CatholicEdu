import { useEffect, useState } from "react";

function getOnlineState() {
  if (typeof navigator === "undefined") return true;
  return navigator.onLine;
}

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(getOnlineState);

  useEffect(() => {
    const sync = () => setIsOnline(getOnlineState());
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  return isOnline;
}

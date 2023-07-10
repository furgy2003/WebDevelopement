import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notification) => {},
  hideNotification: () => {},
});

export function NoticationProvider(props) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      // trigger the return function when useEffect is ran again even when the last one is still
      // running
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  function showNotification(notification) {
    setNotification(notification);
  }
  function hideNotification() {
    setNotification(null);
  }

  const context = {
    notification: notification,
    showNotification: showNotification,
    hideNotification: hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

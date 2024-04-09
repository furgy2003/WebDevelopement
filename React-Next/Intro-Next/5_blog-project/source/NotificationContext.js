import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export function NotificationProvider(props) {
  const [notification, setNotification] = useState();
  function showNotification({ title, message, status }) {
    setNotification({ title, message, status });
  }
  function hideNotification() {
    setNotification();
  }
  const context = {
    notification,
    showNotification,
    hideNotification,
  };

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      const timer = setTimeout(() => {
        hideNotification();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

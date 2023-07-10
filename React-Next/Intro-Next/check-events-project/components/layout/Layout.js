import { Fragment, useContext } from "react";
import MainHeader from "./MainHeader";
import Notification from "../notification/Notification";
import NotificationContext from "@/source/NotificationContext";

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const notification = notificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      {props.children}
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </Fragment>
  );
}

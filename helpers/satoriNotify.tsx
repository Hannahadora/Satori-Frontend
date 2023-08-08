import NotificationAlert from "../src/components/NotificationAlert";

const satoriNotify = (
  title: string,
  msg: string,
  alertType: string
) => {
  return (
    <NotificationAlert
      title={title}
      msg={msg}
      alertType={alertType}
      onClose={() => {}}
    />
  );
};

export default satoriNotify;

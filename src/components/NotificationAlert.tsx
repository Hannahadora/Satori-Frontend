import { useEffect, useState } from "react";

type NotificationAlertProps = {
  title: string;
  msg: string;
  alertType: string;
  onClose: () => void
};

const NotificationAlert: React.FC<NotificationAlertProps> = ({ title, msg, alertType, onClose }) => {
  const [borderColor, setBorderColor] = useState("");
  const [icon, setIcon] = useState("");
  const [showAlert, setShowAlert] = useState(true)

  const handleClose = () => {
    setShowAlert(false)
    onClose()
  }

  // const notificationAlertProps = {...NotificationAlert}

  useEffect(() => {
    if (alertType) {
      setShowAlert(true)
    }
    if (alertType === "sucess") {
      setBorderColor("#00F580");
      setIcon("");
    }
  }, [alertType]);

  return (
    <main className={`w-full z-[500] h-screen fixed bg-[#0D101145] ${showAlert ? 'block' : 'hidden'}`} onClick={() => handleClose}>
      <div
        className={`app-container z-[120] bg-[#ffffff] rounded-[8px] centered border border-${borderColor}`}
      >
        <div className="p-[20px]">
          <div className="flex items-center mb-[16px]">
            <img className="mr-[8px]" src={icon} alt="" />
            <h6 className="font-[600] lg:text-[28px] md:text-[20px] text-[18px] lg:leading-[40px] leading-[24px]">
              {title}
            </h6>
          </div>
          <p>{msg}</p>
          <div className="flex items-center justify-end mt-[20px]">
            <button
              className="px-[24px] py-[7px] font-[600] rounded border border-[#0e606e] text-[#0e606e]"
              onClick={handleClose}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotificationAlert;

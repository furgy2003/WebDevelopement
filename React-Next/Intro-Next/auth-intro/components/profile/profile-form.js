import { useRef } from "react";
import classes from "./profile-form.module.css";

function ProfileForm(props) {
  const oldPassword = useRef();
  const newPassword = useRef();

  function changePasswordHandler(event) {
    event.preventDefault();
    const enteredOldPassword = oldPassword.current.value;
    const enteredNewPassword = newPassword.current.value;

    const passwordData = {
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    };

    props.changePassword(passwordData);
  }

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPassword} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

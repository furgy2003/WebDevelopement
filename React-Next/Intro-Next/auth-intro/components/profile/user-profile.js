import { useRouter } from "next/router";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useSession } from "next-auth/react";

function UserProfile() {
  // Redirect away if NOT auth
  // CLIENT SIDE PAGE GUARDING //
  // const router = useRouter();
  // const { data: session, status } = useSession();
  // if (status === "loading") {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  // if (!session) {
  //   // the outcome of window.location and router.replace is similar but the difference
  //   // is that window.location will reload the page and router.replace will not becuz
  //   // router.replace is React useHook function and objective of React is to achieve
  //   // single page application
  //   window.location.href = "/auth";  // OR router.push("/auth")
  //   return;
  // }

  async function changePassword(passwordData) {
    const response = await fetch("/api/auth/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm changePassword={changePassword} />
    </section>
  );
}

export default UserProfile;

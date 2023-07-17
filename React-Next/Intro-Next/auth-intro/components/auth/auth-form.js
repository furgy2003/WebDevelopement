import { useRef, useState } from "react";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function createNewUser(email, password) {
    const newUser = { email, password };
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    return data;
  }

  async function submitHandler(event) {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;

    if (isLogin) {
      // the credentials will be accessed inside the NextAuth function in api/auth/...nextauth
      // therefore must contains the email and password fields that we will use to verify the log in process
      const response = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (!response.error) {
        router.replace("/");
      }
    } else {
      await createNewUser(email, password);
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={enteredEmail} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={enteredPassword} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;

import AuthForm from "@/components/auth/auth-form";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

function AuthPage() {
  // CLIENT SIDE PAGE GUARDING //
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // we use then instead of await inside useEffect becuz useEffect is not async
    getSession().then((session) => {
      if (session) router.replace("/");
      else setIsLoading(false);
    });
  }, [router]); // adding router as the dependency ensure that every time we try to enter
  // the page, the code will be run and session will be checked first

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;

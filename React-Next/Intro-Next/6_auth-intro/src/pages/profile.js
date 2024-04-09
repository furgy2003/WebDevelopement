import UserProfile from "@/components/profile/user-profile";
// useSession and getServerSession both tell the whether session is ongoing or not
// but useSession could be used only in client side, while getServerSession used in server
// and getSession used in both client and server, note that useSession is built on top of getSession
// and we use getServerSession instead of getSession to avoid unnecessary fetch
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

function ProfilePage() {
  return <UserProfile />;
}
// SERVER SIDE PAGE GUARDING //
// we use getServerSideProps and not getStaticProps becuz getStaticProps only run once
// during npm run build, however, we want to run the code every time a request was made by
// the user
// server side page guarding is faster and in general better than client side
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session: JSON.parse(JSON.stringify(session)) },
  };
}

export default ProfilePage;

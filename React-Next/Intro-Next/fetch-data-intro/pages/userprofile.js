// SERVER SIDE DATA FETCH //

export default function UserProfile(props) {
  return <h1>{props.username}</h1>;
}

// getServerSideProps is a speical function, we can choose to use this func or the getStaticProps
// both return the props and has the parameter context
// when getServerSideProps is used, there will be no prerendering/ pre-generation of page
// instead page is render based on request
// the context parameter contain more imp stuff than just the params
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "USER",
    },
  };
}

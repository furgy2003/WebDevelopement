// STATIC PAGE //

// Using Next.js allow to prerender a page, i.e. when viewing page source, we can see the
// code in html (prerender the js to html) therefore do not have to wait for data to be fetch
// and execuete from the server side
// Prerender page is 1) fast    2) allow web crawling and scraping
import Link from "next/link";

// fs stand for file system, used to access the file in the project diectory
import fs from "fs/promises";
// path used for locating the file
import path from "path";

export default function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

// export async is a special export which Next.js will execuete the code in the function
// before prerendering a page
// the prerender information will be display in html upon viewing page source
// however the function with export async will be hidden, this allow the information hiding
// from the client side
// the getStaticProps is special function that must return an object, once it is ran, the
// data will be available in the props in the prerender func
export async function getStaticProps() {
  console.log("Re-generate");
  // process.cwd() return the project directiory i.e. the fetch-data-intro
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // readFile return a promise, await will wait for the file to finish reading before moving
  // on to the next line of code
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    // if the data is not found, then will return 404 page
    return { notFound: true };
  }

  if (data.products.length === 0) {
    // if products is empty, then redirect the page to the destinated page
    return {
      redirect: {
        destination: "/empty-data",
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    // to regenerate the page every 10s so that any update is reflected on the page
    // when regenerate page, the getStaticProps function will be run again
    revalidate: 10,
  };
}

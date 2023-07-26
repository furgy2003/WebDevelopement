import { Fragment, useState } from "react";
import Header from "@/components/ui/header/Header";
import ProductGrid from "@/components/product/ProductGrid";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import ProductSearch from "@/components/product-search-bar/ProductSearch";
import ProductFilterDrawer from "@/components/product-search-bar/ProductFilterDrawer";

const DUMMY_PRODUCTS = [
  {
    id: "sku1",
    name: "IBeam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur nibh laoreet tortor ullamcorper dictum.",
    image: "/img/ibeam.png",
    category: "Galvanized steel",
  },
  {
    id: "sku2",
    name: "HBeam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur nibh laoreet tortor ullamcorper dictum.",
    image: "/img/hbeam.jpeg",
    category: "Stainless steels",
  },
  {
    id: "sku3",
    name: "IBeam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur nibh laoreet tortor ullamcorper dictum.",
    image: "/img/ibeam.png",
    category: "Galvanized steel",
  },
  {
    id: "sku4",
    name: "IBeam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur nibh laoreet tortor ullamcorper dictum.",
    image: "/img/ibeam.png",
    category: "Galvanized steel",
  },
];

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  function filterHandler() {
    setOpen(true);
  }

  function closeFilterHandler() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Header>Products</Header>
      <Wrapper>
        <ProductSearch filterHandler={filterHandler} />
        <ProductGrid products={DUMMY_PRODUCTS} />
      </Wrapper>
      <ProductFilterDrawer
        open={open}
        closeFilterHandler={closeFilterHandler}
      />
    </Fragment>
  );
}

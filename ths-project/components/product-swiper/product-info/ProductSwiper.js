// components
import Swiper from "@/components/swiper/Swiper";
import ProductSwiperItem from "./ProductSwiperItem";

export default function ProductSwiper(props) {
  const { products } = props;
  return (
    <Swiper>
      {products.map((item) => (
        <ProductSwiperItem key={item.id} product={item} />
      ))}
    </Swiper>
  );
}

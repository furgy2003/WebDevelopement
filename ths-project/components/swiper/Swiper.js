// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";

// antd icon
import { LeftOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const CustomRow = styled(Row)`
  & {
    overflow: visible !important;
  }
  .column {
    overflow: visible !important;
  }
`;

const CustomSlider = styled(Slider)`
  & {
    overflow: visible !important;
  }

  .right {
    display: block;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }

  .left {
    display: block;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }

  .arrow {
    font-size: 200%;
    color: var(--grey_font);
  }

  .arrow:hover {
    color: var(--action_green);
  }
`;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="right" onClick={onClick}>
      <RightOutlined className="arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="left" onClick={onClick}>
      <LeftOutlined className="arrow" />
    </div>
  );
}

export default function Swiper(props) {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    InitalSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CustomRow justify="center">
      <Col className="column" xs={24} sm={24} md={24} lg={18}>
        <CustomSlider {...settings}>{props.children}</CustomSlider>
      </Col>
    </CustomRow>
  );
}

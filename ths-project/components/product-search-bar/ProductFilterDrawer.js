import { Drawer } from "antd";
import ProductFilterList from "./ProductFilterList";
import styled from "styled-components";

const CustomDrawer = styled(Drawer)`
  .ant-drawer-header {
    overflow-y: hidden;
    padding: 2rem;
  }

  .ant-drawer-close {
    position: absolute;
    right: 1rem;
  }
`;

export default function ProductFilterDrawer(props) {
  const { closeFilterHandler, open } = props;

  return (
    <CustomDrawer
      title="Filter by categories"
      placement="left"
      position="left"
      onClose={closeFilterHandler}
      open={open}
    >
      <ProductFilterList />
    </CustomDrawer>
  );
}

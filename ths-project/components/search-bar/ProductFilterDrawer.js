import { Drawer } from "antd";

export default function ProductFilterDrawer(props) {
  const { closeFilterHandler, open } = props;

  return (
    <Drawer
      title="Filter by categories"
      placement="left"
      onClose={closeFilterHandler}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

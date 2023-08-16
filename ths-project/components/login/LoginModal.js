// components
import { Modal } from "antd";

export default function LoginModal(props) {
  const { isModalOpen, setIsModalOpen } = props;

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Login"
      open={isModalOpen}
      onCancel={handleCancel}
      centered
      footer={null}
    >
      <div>
        <div></div>
        <div></div>
      </div>
    </Modal>
  );
}

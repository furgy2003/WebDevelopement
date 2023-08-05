// react-next
import { useState } from "react";
import { styled } from "styled-components";

// components
import { Checkbox } from "antd";

const CustomDiv = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }

  .ant-checkbox-wrapper {
    margin-bottom: 0.5rem;
    overflow: hidden;
  }

  .ant-checkbox {
    overflow: hidden;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--action_green) !important;
    border-color: var(--action_green) !important;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: var(--action_green) !important;
  }

  .ant-checkbox-group {
    display: grid;
  }
`;

export default function FilterList() {
  const categories = ["Galvanized steel", "Stainless steels"];
  const [checkAll, setCheckAll] = useState(true);
  const [checkedList, setCheckedList] = useState(categories);

  const filterTickHandler = (list) => {
    setCheckedList(list);
    setCheckAll(list.length === categories.length);
  };

  const CheckAllChange = (e) => {
    setCheckedList(e.target.checked ? categories : []);
    setCheckAll(e.target.checked);
  };

  return (
    <CustomDiv>
      <Checkbox checked={checkAll} onChange={CheckAllChange}>
        All
      </Checkbox>
      <Checkbox.Group
        options={categories}
        value={checkedList}
        onChange={filterTickHandler}
      />
    </CustomDiv>
  );
}

import { styled } from "styled-components";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const CustomDiv = styled.div`
  & {
    display: flex;
    justify-content: center;
  }

  & input {
    border-width: 1px;
    border-right: 0px;
    border-left: 0px;
    border-style: solid;
    border-color: #ddd;
    height: 2rem;
    width: 20rem;
  }

  & input:focus {
    outline: none;
  }

  & button {
    padding-left: 1rem;
    padding-right: 1rem;
    border: 0px;
  }

  .search_btn {
    background-color: var(--d_green);
    color: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .filter_btn {
    color: var(--grey_font);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .filter_btn:hover {
    background-color: #c9c9c9;
  }
`;

export default function ProductSearch(props) {
  return (
    <CustomDiv>
      <button className="filter_btn" onClick={props.filterHandler}>
        <FilterOutlined />
      </button>
      <input type="text" />
      <button className="search_btn">
        <SearchOutlined />
      </button>
    </CustomDiv>
  );
}

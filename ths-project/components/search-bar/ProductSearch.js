import classes from "./ProductSearch.module.css";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

export default function ProductSearch(props) {
  return (
    <div className={classes.search}>
      <button className={classes.filter_btn} onClick={props.filterHandler}>
        <FilterOutlined />
      </button>
      <input type="text" />
      <button className={classes.search_btn}>
        <SearchOutlined />
      </button>
    </div>
  );
}

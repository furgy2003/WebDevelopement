import classes from "./EventFilter.module.css";
import Button from "../ui/Button";
import { useRef } from "react";

export default function EventFilter(props) {
  const yearRef = useRef();
  const monthRef = useRef();
  function filterHandler(event) {
    event.preventDefault();
    const month = monthRef.current.value;
    const year = yearRef.current.value;

    props.changeFilteredPage(year, month);
  }

  return (
    <form className={classes.filter}>
      <label htmlFor="year_select">Year:</label>
      <select name="" id="year_select" ref={yearRef}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      <label htmlFor="month_select">Month:</label>
      <select id="month_select" ref={monthRef}>
        <option value="0">Jan</option>
        <option value="1">Feb</option>
        <option value="2">Mar</option>
        <option value="3">Apr</option>
        <option value="4">May</option>
        <option value="5">Jun</option>
        <option value="6">Jul</option>
        <option value="7">Aug</option>
        <option value="8">Sep</option>
        <option value="9">Oct</option>
        <option value="10">Nov</option>
        <option value="11">Dec</option>
      </select>
      <Button clickHandler={filterHandler}>Filter</Button>
    </form>
  );
}

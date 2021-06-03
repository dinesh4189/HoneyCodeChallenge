import React from "react";

const FilterSection = (props) => {
  const filterAction = (event, actionType) => {
    if (actionType === "noti") {
      console.log("noti");
      props.searchWithWord(event.target.value);
      event.target.value = "";
    } else if (actionType === "active") {
      props.activeFilter(event.target.checked);
    }
  };

  return (
    <section className="filterSction">
      <div className="typeAheadSection">
        <label>Search:</label>
        <input
          type="text"
          name="search"
          onBlur={(e) => filterAction(e, "noti")}
          id="searchInput"
        />
        <button type="rest" onClick={() => props.resetSearch()}>
          {" "}
          Clear Search
        </button>
      </div>
      <div className="activeFilter">
        <label>
          <input
            type="checkbox"
            id="showActive"
            value="checked"
            onChange={(e) => filterAction(e, "active")}
          />{" "}
          Show only acrive
        </label>
      </div>
    </section>
  );
};

export default FilterSection;

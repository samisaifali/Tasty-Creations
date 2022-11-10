import React from "react";
import styles from "./search.module.css";

const SearchInput = (props) => {
  const { value, onChange } = props;

  return (
    <div className={styles.container}>
      <label htmlFor="searchExternalSource">Search by title:</label>
      <input
        id="searchExternalSource"
        className={styles.searchInput}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default React.memo(SearchInput);

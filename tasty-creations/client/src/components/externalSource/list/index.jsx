import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useUpdateEffect from "../../../hooks/useUpdateEffect";
import { useNavigate } from "react-router";
import {
  getExternalSources,
  queryExternalSources,
  deleteExternalSource,
} from "../../../lib/api";
import List from "../../list";
import Loading from "../../loading";
import SearchInput from "./components/search";
import styles from "./index.module.css";

const ExternalSourceList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  /*
   * Debounce search value with 500ms duration. This value will be watching and triggering search action.
   * This behavior will improve UX since the user won't need to take additional action to perform search.
   */
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const fetchExternalSources = async (title = "") => {
    setLoading(true);

    const fetcherFn = () =>
      title ? queryExternalSources(title) : getExternalSources();

    try {
      const { data } = await fetcherFn();

      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleExternalSourceClick = (id) => {
    navigate(`/external-source/update/${id}`);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await deleteExternalSource(id);
    } catch (e) {
      console.log(`Error: ${e}`);
    } finally {
      fetchExternalSources();
    }
  };

  const renderItem = useCallback(
    (data) => (
      <div
        className={styles.listItem}
        onClick={() => handleExternalSourceClick(data.id)}
      >
        <div className={styles.leftSide}>
          <div className={styles.inlineInfo}>
            <span>Name:</span>
            <span>{data.name}</span>
          </div>
          <div className={styles.info}>
            <span>About:</span>
            <span>{data.description}</span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.inlineInfo}>
            <span>Website:</span>
            <a href={data.website} onClick={(e) => e.stopPropagation()}>
              {data.website}
            </a>
          </div>
          <div className={styles.recipe}>
            <div className={styles.info}>
              <span>Sample Recipe:</span>
              <span>{data.sampleRecipe}</span>
            </div>
            <img
              className={styles.recipeImage}
              src={data.image}
              alt={data.name}
            />
          </div>
        </div>
        <div className={styles.delete}>
          <button onClick={(e) => handleDelete(e, data.id)}>&#10006;</button>
        </div>
      </div>
    ),
    []
  );

  const listKeyExtractor = useCallback((item) => item.name, []);

  useUpdateEffect(() => {
    fetchExternalSources(debouncedSearchValue);
  }, [debouncedSearchValue]);

  useEffect(() => {
    fetchExternalSources();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <Loading />}
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <a className={styles.button} href="/external-source/new">
        Add another source
      </a>
      <div className={styles.listWrapper}>
        <List
          data={data}
          keyExtractor={listKeyExtractor}
          renderItem={renderItem}
          SeparatorComponent={ListSeparator}
        />
      </div>
    </div>
  );
};

const ListSeparator = React.memo(() => <div className={styles.separator} />);

export default ExternalSourceList;

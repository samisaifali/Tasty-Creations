import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useUpdateEffect from "../../../hooks/useUpdateEffect";
import { getExternalSources, queryExternalSources } from "../../../lib/api";
import List from "../../list";
import Loading from "../../loading";
import SearchInput from "./components/search";
import styles from "./list.module.css";

const MOCK_DATA = [
  {
    name: "Smitten Kitchen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis, quis nemo laudantium alias incidunt ea recusandae obcaecati officia sed.",
    website: "https://smittenkitchen.com/",
    sampleRecipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque.",
    image: "https://picsum.photos/id/1021/200/300",
  },
  {
    name: "Orangette",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis, quis nemo laudantium alias incidunt ea recusandae obcaecati officia sed.",
    website: "https://orangette.net/",
    sampleRecipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque.",
    image: "https://picsum.photos/id/1021/200/300",
  },
];

const ExternalSourceList = () => {
  const [data, setData] = useState(MOCK_DATA);
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

  const renderItem = useCallback(
    (data) => (
      <div className={styles.listItem}>
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
            <a href={data.website}>{data.website}</a>
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

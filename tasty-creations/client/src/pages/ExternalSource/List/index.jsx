import React, { useEffect, useState } from "react";
import List from "../../../components/List";
import Loading from "../../../components/Loading";
import { getExternalSources } from "../../../lib/api";
import styles from "./index.module.css";

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

  useEffect(() => {
    /*
     * Since useEffect does not accept async-await,
     * We're using self-invoking arrow function to be able to use async-await.
     */
    (async () => {
      setLoading(true);

      try {
        const { data } = await getExternalSources();

        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const renderItem = (data) => (
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
  );

  return (
    <div className={styles.container}>
      <a className={styles.button} href="/external-source/new">
        Add another source
      </a>
      {loading && <Loading />}
      {!loading && !!data.length && (
        <div className={styles.listWrapper}>
          <List
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
            SeparatorComponent={ListSeparator}
          />
        </div>
      )}
    </div>
  );
};

const ListSeparator = () => {
  return <div className={styles.separator} />;
};

export default ExternalSourceList;

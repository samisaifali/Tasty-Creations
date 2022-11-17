import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../../loading";
import { getExternalSourceById, updateExternalSource } from "../../../lib/api";
import { classes } from "../../../utils/cssClass";
import styles from "./index.module.css";



const ExternalSourceUpdate = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [sampleRecipe, setSampleRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const fetchExternalSource = async () => {
    setLoading(true);

    try {
      const { data } = await getExternalSourceById(+id);
      setName(data.name);
      setWebsite(data.website);
      setDescription(data.description);
      setSampleRecipe(data.sampleRecipe);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleUpdateButtonClick = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await updateExternalSource(+id,
        {
          name,
          description,
          image,
          sampleRecipe,
          website,
        });

      navigate("/external-source");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (setterFn) => (e) => {
    setterFn(e.target.value);
  };

  const handleFileInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    fetchExternalSource();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <Loading />}
      <div className={styles.infoMessage}>
        You want to check out websites of other amazing content creators? Add to
        the information below to help share their knowledge...!
      </div>
      <form className={styles.form}>
        <div className={styles.inputRow}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            id="name"
            type="text"
            className={styles.input}
            value={name}
            onChange={handleInputChange(setName)}
          />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="website" className={styles.label}>
            Link to source
          </label>
          <input
            id="website"
            type="url"
            className={styles.input}
            value={website}
            onChange={handleInputChange(setWebsite)}
          />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            rows="5"
            className={[styles.input, styles.textArea].join(" ")}
            value={description}
            onChange={handleInputChange(setDescription)}
          />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="sampleRecipe" className={styles.label}>
            Sample recipe
          </label>
          <textarea
            id="sampleRecipe"
            rows="5"
            className={classes(styles.input, styles.textArea)}
            value={sampleRecipe}
            onChange={handleInputChange(setSampleRecipe)}
          />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="imageFile" className={styles.label}>
            Image
          </label>
          <input
            className={styles.input}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileInputChange}
          />
        </div>
        <button className={styles.button} onClick={handleUpdateButtonClick}>
          Update External Source
        </button>
      </form>
    </div>
  );
};

export default ExternalSourceUpdate;

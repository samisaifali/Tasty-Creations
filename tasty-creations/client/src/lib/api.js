import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_HOST;

/**
 *
 * @returns {import("axios").AxiosPromise<
 *   Array<{
 *     name: string,
 *     description: string,
 *     website: string,
 *     sampleRecipe: string,
 *     image: string,
 *   }>
 * >}
 */
export const getExternalSources = () =>
  axios.get(`${BASE_URL}/external-sources`);

/**
 *
 * @param {{
 *   name: string,
 *   description: string,
 *   website: string,
 *   sampleRecipe: string,
 *   image: File,
 * }} data
 * @returns
 */
export const addExternalSource = (data) => {
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key]);
  }

  return axios.post(`${BASE_URL}/external-source`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

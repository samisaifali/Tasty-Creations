import axios from "axios";

const MOCK_DATA = [
  {
    id: 1,
    name: "Smitten Kitchen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis, quis nemo laudantium alias incidunt ea recusandae obcaecati officia sed.",
    website: "https://smittenkitchen.com/",
    sampleRecipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque.",
    image: "https://picsum.photos/id/1021/200/300",
  },
  {
    id: 2,
    name: "Orangette",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis, quis nemo laudantium alias incidunt ea recusandae obcaecati officia sed.",
    website: "https://orangette.net/",
    sampleRecipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, neque.",
    image: "https://picsum.photos/id/1021/200/300",
  },
];


const BASE_URL = process.env.REACT_APP_API_HOST;

/**
 *
 * @returns {import("axios").AxiosPromise<
 *   Array<{
*      id: number,
 *     name: string,
 *     description: string,
 *     website: string,
 *     sampleRecipe: string,
 *     image: string,
 *   }>
 * >}
 */
export const getExternalSources = () =>
  //uncomment this line to use the real API instead of mock data
  // axios.get(`${BASE_URL}/external-sources`);
  Promise.resolve({ data: MOCK_DATA });


/**
 *
 * @returns {import("axios").AxiosPromise<
 *   {
*      id: number,
 *     name: string,
 *     description: string,
 *     website: string,
 *     sampleRecipe: string,
 *     image: string,
 *   }
 * >}
 */
export const getExternalSourceById = (id) =>
  //uncomment this line to use the real API instead of mock data
  // axios.get(`${BASE_URL}/external-sources/${id}`);
  Promise.resolve({ data: MOCK_DATA.find(t => t.id === id) });


/**
 *
 * @param {string} title
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
export const queryExternalSources = (title) =>
  axios.get(`${BASE_URL}/external-sources?title=${title}`);

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

export const updateExternalSource = (id, data) => {
  const formData = new FormData();

  for (const key in data) {
    if (data[key] != null) {
      formData.append(key, data[key]);
    }
  }

  return axios.put(`${BASE_URL}/external-source/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteExternalSource = (id) =>
  axios.delete(`${BASE_URL}/external-source/${id}`);


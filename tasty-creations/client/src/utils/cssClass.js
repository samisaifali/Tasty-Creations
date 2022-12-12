/**
 *
 * @param {string[]} classArr
 */
export const classes = (...classArr) => {
  return classArr.filter(Boolean).join(" ");
};

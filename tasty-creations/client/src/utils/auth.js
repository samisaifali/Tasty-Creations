export const isUserAuthenticated = () => {
  return localStorage.getItem("userid") !== null;
};

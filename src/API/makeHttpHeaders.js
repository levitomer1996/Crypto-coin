export default (token, type) => {
  httpHeaders = {
    "Content-Type": "javascript/json",
    "auth-xxx": localStorage.getItem("google_t"),
    userType: type,
  };
  return new Headers(httpHeaders);
};

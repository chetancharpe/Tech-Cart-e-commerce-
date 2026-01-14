export const saveUser = (data) => localStorage.setItem("user", JSON.stringify(data));
export const getUser = () => JSON.parse(localStorage.getItem("user"));
export const logout = () => localStorage.removeItem("user");

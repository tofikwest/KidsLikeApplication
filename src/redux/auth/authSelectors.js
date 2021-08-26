export const authorizedUser = (state) => state.auth.isAuthenticated;
export const getErrorAuth = (state) => state.auth.error;
export const getUserName = (state) => state.auth.user.name;
export const setToken = (state) => state.auth.token;
export const getError = (state) => state.auth.error;

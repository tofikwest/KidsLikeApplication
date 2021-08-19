export const authorizedUser = (state) => state.auth.isAuthenticated;
export const getErrorAuth = (state) => state.auth.error;
export const getUserName = (state) => state.auth.user.name;

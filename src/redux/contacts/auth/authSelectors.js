export const authorizedUser = (state) => Boolean(state.auth.tokens.idToken);
export const getErrorAuth = (state) => state.auth.error;
export const getUserName = (state) => state.auth.user.name;

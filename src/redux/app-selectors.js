export const getOrganization = (state) => {
  return state.app.organization;
}

export const getfindedOrganization = (state) => {
  return state.app.findedOrganization;
}

export const appSEL = {
  getOrganization,
  getfindedOrganization
};
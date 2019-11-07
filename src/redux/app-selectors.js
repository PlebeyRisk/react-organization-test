export const getSavedOrganization = (state) => {
  return state.app.savedOrganization;
}

export const getfindedOrganization = (state) => {
  return state.app.findedOrganization;
}

export const getSelectedOrganization = (state) => {
  return state.app.selectedOrganization;
}

export const appSEL = {
  getSavedOrganization,
  getfindedOrganization,
  getSelectedOrganization
};
import { deleteElementByIndex } from "../utils/helpers/objects";
import { appAPI } from "../api/api";
import { blur } from "redux-form"

const ADD_ORGANIZATION = 'ADD_ORGANIZATION';
const DELETE_ORGANIZATION = 'DELETE_ORGANIZATION';
const SET_FINDED_ORGANIZATION = 'SET_FINDED_ORGANIZATION';
const SET_SELECTED_ORGANIZATION = 'SET_SELECTED_ORGANIZATION';
const SET_SAVE_STATUS = 'SET_SAVE_STATUS';

const initialState = {
  savedOrganization: [],
  findedOrganization: null,
  selectedOrganization: null,
  saveStatus: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORGANIZATION:
      return {
        ...state,
        savedOrganization: [...state.savedOrganization, action.organization]
      };
    case DELETE_ORGANIZATION:
      return {
        ...state,
        savedOrganization: [...deleteElementByIndex(state.savedOrganization, action.index)]
      };
    case SET_FINDED_ORGANIZATION:
      return {
        ...state,
        findedOrganization: action.organization
      };
    case SET_SELECTED_ORGANIZATION:
      return {
        ...state,
        selectedOrganization: action.organization
      };
    case SET_SAVE_STATUS:
      return {
        ...state,
        saveStatus: action.status
      };
    default:
      return state;
  };
}

export const setSaveStatus = (status) => ({
  type: SET_SAVE_STATUS,
  status
});
export const deleteOrganization = (index) => ({
  type: DELETE_ORGANIZATION,
  index
});
export const addOrganization = (organization) => ({
  type: ADD_ORGANIZATION,
  organization
});
export const setFindedOrganization = (organization) => ({
  type: SET_FINDED_ORGANIZATION,
  organization
});
export const setSelectedOrganization = (organization) => ({
  type: SET_SELECTED_ORGANIZATION,
  organization
});

export const findOrganization = (term) => async (dispatch) => {
  if (!term || term.trim().length === 0) {
    dispatch(setFindedOrganization(null));
    return;
  }

  const response = await appAPI.getOrganization(term);

  if (!response) return;

  dispatch(setFindedOrganization(response.suggestions));
};

export const saveOrganization = (organization) => dispatch => {
  dispatch(addOrganization(organization));
  dispatch(setSaveStatus(true));
};

export const selectOrganization = (organization) => dispatch => {
  dispatch(setSelectedOrganization(organization));
  dispatch(setSaveStatus(false));
};

export const removeOrganization = (index) => dispatch => {
  console.log(index);
  dispatch(deleteOrganization(index));
};

export const fieldBlur = (form, field, value) => dispatch => {
  dispatch(blur(form, field, value));
};

export default appReducer;
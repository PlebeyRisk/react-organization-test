import React from 'react';
import { connect } from 'react-redux';
import TabsOrg from './tabs';
import { appSEL } from '../../../redux/app-selectors';
import { saveOrganization, removeOrganization } from '../../../redux/app-reducer';

const TabsLogic = props => {
  return <TabsOrg {...props} />;
};

let mapStateToProps = state => {
  const { getSavedOrganization, getSelectedOrganization, getSaveStatus } = appSEL;
  return {
    savedOrganization: getSavedOrganization(state),
    selectedOrganization: getSelectedOrganization(state),
    saveStatus: getSaveStatus(state),
  };
};

let mapDispatchToProps = {
  saveOrganization,
  removeOrganization,
};

const TabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabsLogic);

export default TabsContainer;

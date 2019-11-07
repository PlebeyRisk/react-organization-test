import React from 'react';
import { connect } from 'react-redux';
import TabsOrg from './tabs';
import { appSEL } from '../../../redux/app-selectors';
import { addOrganization } from '../../../redux/app-reducer';

const TabsLogic = props => {
  return <TabsOrg {...props} />;
};

let mapStateToProps = state => {
  const { getSavedOrganization, getSelectedOrganization } = appSEL;
  return {
    savedOrganization: getSavedOrganization(state),
    selectedOrganization: getSelectedOrganization(state),
  };
};

let mapDispatchToProps = {
  addOrganization,
};

const TabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabsLogic);

export default TabsContainer;

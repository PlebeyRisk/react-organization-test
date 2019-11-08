import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TabsOrg from './tabs';
import { appSEL } from '../../../redux/app-selectors';
import { saveOrganization, removeOrganization, updateSaveStatus } from '../../../redux/app-reducer';

const TabsLogic = props => {
  const { updateSaveStatus, savedOrganization, selectedOrganization } = props;

  useEffect(() => {
    updateSaveStatus(savedOrganization, selectedOrganization);
  }, [savedOrganization, selectedOrganization]);

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
  updateSaveStatus,
};

const TabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabsLogic);

export default TabsContainer;

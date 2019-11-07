import React from 'react';
import { connect } from 'react-redux';
import TabsOrg from './tabs';
import { appSEL } from '../../../redux/app-selectors';

const TabsLogic = props => {
  return <TabsOrg {...props} />;
};

let mapStateToProps = state => {
  const { getOrganization } = appSEL;
  return {
    organization: getOrganization(state),
  };
};

let mapDispatchToProps = {};

const TabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabsLogic);

export default TabsContainer;

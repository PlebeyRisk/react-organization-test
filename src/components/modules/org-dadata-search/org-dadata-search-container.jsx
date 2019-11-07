import React from 'react';
import { connect } from 'react-redux';
import OrgSearchField from './org-dadata-search';
import { appSEL } from '../../../redux/app-selectors';
import { findOrganization, setSelectedOrganization } from '../../../redux/app-reducer';

const OrgSearchFieldLogic = props => {
  const { findedOrganization, findOrganization, setSelectedOrganization } = props;

  const fetchOrganization = formData => {
    const { organization } = formData;
    findOrganization(organization);
  };

  const selectOrganization = index => {
    console.log(index, findedOrganization[index]);
    setSelectedOrganization(findedOrganization[index]);
  };

  return <OrgSearchField {...props} onSubmit={fetchOrganization} selectOrganization={selectOrganization} />;
};

let mapStateToProps = state => {
  const { getfindedOrganization } = appSEL;
  return {
    findedOrganization: getfindedOrganization(state),
  };
};

let mapDispatchToProps = {
  findOrganization,
  setSelectedOrganization,
};

const OrgSearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgSearchFieldLogic);

export default OrgSearchFieldContainer;

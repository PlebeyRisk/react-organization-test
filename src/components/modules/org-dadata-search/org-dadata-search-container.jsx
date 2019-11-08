import React from 'react';
import { connect } from 'react-redux';
import OrgSearchField from './org-dadata-search';
import { appSEL } from '../../../redux/app-selectors';
import { findOrganization, fieldBlur, selectOrganization } from '../../../redux/app-reducer';

const OrgSearchFieldLogic = props => {
  const { findedOrganization, findOrganization, selectOrganization } = props;

  const fetchOrganization = formData => {
    const { organization } = formData;
    findOrganization(organization);
  };

  const selectOrganizationByIndex = index => {
    selectOrganization(findedOrganization[index]);
  };

  return <OrgSearchField {...props} onSubmit={fetchOrganization} selectOrganization={selectOrganizationByIndex} />;
};

let mapStateToProps = state => {
  const { getfindedOrganization } = appSEL;
  return {
    findedOrganization: getfindedOrganization(state),
  };
};

let mapDispatchToProps = {
  findOrganization,
  selectOrganization,
  fieldBlur,
};

const OrgSearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgSearchFieldLogic);

export default OrgSearchFieldContainer;

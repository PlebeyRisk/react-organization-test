import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import OrgSearchField from './org-dadata-search';
import { appSEL } from '../../../redux/app-selectors';
import { findOrganization } from '../../../redux/app-reducer';

const OrgSearchFieldLogic = props => {
  const { findOrganization } = props;

  const fetchOrganization = formData => {
    const { organization } = formData;
    findOrganization(organization);
  };

  return <OrgSearchField {...props} onSubmit={fetchOrganization} />;
};

let mapStateToProps = state => {
  const { getfindedOrganization } = appSEL;
  return {
    findedOrganization: getfindedOrganization(state),
  };
};

let mapDispatchToProps = {
  findOrganization,
};

const OrgSearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgSearchFieldLogic);

export default OrgSearchFieldContainer;

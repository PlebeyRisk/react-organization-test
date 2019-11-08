import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';
import { createId } from '../../../utils/helpers/id';
import OrgSearchFieldContainer from '../org-dadata-search/org-dadata-search-container';
import NewOrgInfo from '../new-org-info/new-org-info';
import Button from '../../common/button';
import SuccessMark from '../../common/success-mark';

const StyledForm = styled.div`
  background-color: ${colors.light};
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const StyledSaveStatusLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.textFour};

  span {
    margin-left: 9px;
  }
`;

const SaveStatusLabel = () => {
  return (
    <StyledSaveStatusLabel>
      <SuccessMark />
      <span>Сохранено</span>
    </StyledSaveStatusLabel>
  );
};

const NewOrgForm = ({ selectedOrganization, saveOrganization, saveStatus }) => {
  const orgFieldId = createId();

  return (
    <StyledForm>
      <FieldGroup>
        <Label htmlFor={orgFieldId}>Организация или ИП</Label>
        <OrgSearchFieldContainer id={orgFieldId} />
      </FieldGroup>
      <FieldGroup>
        <NewOrgInfo info={selectedOrganization} />
      </FieldGroup>
      {selectedOrganization ? (
        saveStatus ? (
          <SaveStatusLabel />
        ) : (
          <Button onClick={() => saveOrganization(selectedOrganization)}>Сохранить</Button>
        )
      ) : (
        undefined
      )}
    </StyledForm>
  );
};

export default NewOrgForm;

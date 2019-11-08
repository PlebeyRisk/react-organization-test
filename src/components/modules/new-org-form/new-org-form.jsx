import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors, pxToRem, device } from '../../../theme/globalStyle';
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

const StyledButton = styled(Button)`
  width: 100%;

  @media ${device.tablet} {
    width: auto;
  }
`;

const StyledSaveStatusLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: ${pxToRem(18)};
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
          <StyledButton onClick={() => saveOrganization(selectedOrganization)}>Сохранить</StyledButton>
        )
      ) : (
        undefined
      )}
    </StyledForm>
  );
};

export default NewOrgForm;

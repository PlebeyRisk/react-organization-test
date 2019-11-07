import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';
import { createId } from '../../../utils/helpers/id';
import OrgSearchFieldContainer from '../org-dadata-search/org-dadata-search-container';
import NewOrgInfo from '../new-org-info/new-org-info';
import Button from '../../common/button';

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

const NewOrgForm = ({ selectedOrganization, addOrganization }) => {
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
        <Button onClick={() => addOrganization(selectedOrganization)}>Сохранить</Button>
      ) : (
        undefined
      )}
    </StyledForm>
  );
};

export default NewOrgForm;

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';
import { createId } from '../../../utils/helpers/id';
import OrgSearchFieldContainer from '../org-dadata-search/org-dadata-search-container';

const StyledForm = styled.div`
  background-color: ${colors.light};
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

function NewOrgForm() {
  const orgFieldId = createId();

  return (
    <StyledForm>
      <FieldGroup>
        <Label htmlFor={orgFieldId}>Организация или ИП</Label>
        <OrgSearchFieldContainer id={orgFieldId} />
      </FieldGroup>
    </StyledForm>
  );
}

export default NewOrgForm;

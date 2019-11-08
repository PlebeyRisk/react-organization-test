import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../common/textfield';
import SearchResults from './search-results';

const StyledOrgSearch = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SearchResultsWrap = styled.div`
  position: relative;
`;

const StyledField = styled(Field)`
  position: relative;
  width: 100%;
  z-index: 2;
`;

const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 3;
`;

const OrgSearch = ({ handleSubmit, fieldId, findedOrganization, selectOrganization, fieldBlur }) => {
  const [resultsVisibleMode, setResultsVisibleMode] = useState(false);

  const showResults = () => {
    setResultsVisibleMode(true);
  };

  const hideResults = () => {
    setResultsVisibleMode(false);
  };

  return (
    <StyledOrgSearch>
      <form onSubmit={handleSubmit} autoComplete={'off'}>
        <StyledField
          name="organization"
          component={TextField}
          type="text"
          id={fieldId}
          placeholder="Введите название, ИНН или адрес организации"
          onFocus={() => showResults()}
          onBlur={() => hideResults()}
        />
        <Button>Найти</Button>
      </form>
      <SearchResultsWrap hidden={!resultsVisibleMode}>
        <SearchResults
          organization={findedOrganization}
          selectOrganization={selectOrganization}
          blur={fieldBlur}
          setResultsVisibleMode={setResultsVisibleMode}
        />
      </SearchResultsWrap>
    </StyledOrgSearch>
  );
};

const OrgSearchField = reduxForm({ form: 'orgSearch' })(OrgSearch);

export default OrgSearchField;

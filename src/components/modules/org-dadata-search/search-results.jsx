import React from 'react';
import styled from 'styled-components';
import { colors, pxToRem } from '../../../theme/globalStyle';

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: -3px;
  padding: 20px 0;
  width: 100%;
  background-color: ${colors.light};
  border: 1px solid ${colors.border};
  border-radius: 0 0 3px 3px;
  border-top: none;
`;

const StyledItem = styled.div`
  padding: 7px 20px;
  color: ${colors.textTwo};

  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
  }

  span {
    margin-top: 5px;
    margin-right: 20px;
    font-size: ${pxToRem(12)};

    :last-child {
      margin-right: 0;
    }
  }
`;

const Item = ({ name, inn, address, index, clickItemHandler }) => {
  return (
    <StyledItem onClick={() => clickItemHandler(index, name)}>
      <h1>{name}</h1>
      <span>{inn}</span>
      <span>{address}</span>
    </StyledItem>
  );
};

const SearchResults = ({ organization, selectOrganization, blur, setResultsVisibleMode }) => {
  if (!organization || organization === null || organization.length === 0) return <></>;

  const clickItemHandler = (index, orgName) => {
    selectOrganization(index);
    blur('orgSearch', 'organization', orgName);
    setResultsVisibleMode(false);
  };

  const items = organization.map((org, index) => (
    <Item
      name={org.value}
      inn={org.data.inn}
      address={org.data.address.data.city_with_type}
      key={index}
      index={index}
      clickItemHandler={clickItemHandler}
    />
  ));

  return <StyledSearchResults onMouseDown={e => e.preventDefault()}>{items}</StyledSearchResults>;
};

export default SearchResults;

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';

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
    font-size: 12px;

    :last-child {
      margin-right: 0;
    }
  }
`;

const Item = ({ name, inn, address }) => {
  return (
    <StyledItem>
      <h1>{name}</h1>
      <span>{inn}</span>
      <span>{address}</span>
    </StyledItem>
  );
};

const SearchResults = ({ organization }) => {
  if (!organization || organization === null || organization.length === 0) return <></>;
  const items = organization.map((org, index) => (
    <Item
      name={org.value}
      inn={org.data.inn}
      address={org.data.address.data.city_with_type}
      key={index}
      index={index}
    />
  ));

  return <StyledSearchResults>{items}</StyledSearchResults>;
};

export default SearchResults;

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, pxToRem, device } from '../../../theme/globalStyle';
import deleteIcon from '../../../img/delete.svg';
import moreIcon from '../../../img/more-mark.svg';

const StyledForm = styled.div`
  background-color: ${colors.light};
`;

const EmptyText = styled.span`
  color: ${colors.textThree};
`;

const StyledItem = styled.div`
  position: relative;
  margin-bottom: 21px;
  padding: 16px;
  padding-bottom: ${props => (props.expandMode ? '46px' : '16px')};
  background-color: ${colors.light};
  border: 1px solid ${colors.border};
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  :last-child {
    margin-bottom: 0;
  }
`;

const ItemTitle = styled.h2`
  padding-right: 30px;
  font-size: ${pxToRem(18)};
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledItemGroup = styled.div`
  display: flex;
  flex-direction: ${props => (props.inlineMode ? 'row' : 'column')};
  margin-bottom: 10px;
  font-size: ${pxToRem(12)};

  :last-child {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const GroupTitle = styled.span`
  margin-bottom: 5px;
  margin-right: 15px;
  color: ${colors.textThree};

  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const GroupInfo = styled.span``;

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 5px;
  border: none;
  background-color: transparent;
`;

const DeleteButtonImg = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  background: url(${deleteIcon}) center no-repeat;
  background-size: cover;
`;

const StyledMoreButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 5px;
  border: none;
  background-color: transparent;
  font-size: ${pxToRem(10)};
  text-decoration: underline;
  color: ${colors.textThree};
`;

const MoreButtonImg = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background: url(${moreIcon}) center no-repeat;
  background-size: cover;
  transform: ${props => (props.expandMode ? 'rotate(180deg)' : 'rotate(0)')};
`;

const ExpandWrap = styled.div`
  display: ${props => (props.expandMode ? 'block' : 'none')};
`;

const MoreButton = ({ toggle, expandMode }) => {
  return (
    <StyledMoreButton onClick={toggle}>
      <span>подробнее</span>
      <MoreButtonImg expandMode={expandMode} />
    </StyledMoreButton>
  );
};

const DeleteButton = ({ removeOrganization, index }) => {
  return (
    <StyledDeleteButton onClick={() => removeOrganization(index)}>
      <DeleteButtonImg />
    </StyledDeleteButton>
  );
};

const ItemGroup = ({ title, info }) => {
  const inlineMode = ['ИНН', 'КПП', 'ОГРН'].includes(title);
  return (
    <StyledItemGroup inlineMode={inlineMode}>
      <GroupTitle>{title}</GroupTitle>
      <GroupInfo>{info}</GroupInfo>
    </StyledItemGroup>
  );
};

const Item = ({ index, name, inn, kpp, ogrn, address, management, removeOrganization }) => {
  const [expandMode, setExpandMode] = useState(false);

  const toggle = () => {
    setExpandMode(!expandMode);
  };

  return (
    <StyledItem expandMode={expandMode}>
      <DeleteButton removeOrganization={removeOrganization} index={index} />
      <MoreButton expandMode={expandMode} toggle={toggle} />
      <ItemTitle>{name}</ItemTitle>
      <ItemGroup title="ИНН" info={inn} />
      <ExpandWrap expandMode={expandMode}>
        <ItemGroup title="КПП" info={kpp} />
        <ItemGroup title="ОГРН" info={ogrn} />
        <ItemGroup title="Юридический адрес" info={address} />
        <ItemGroup title="Генеральный директор" info={management} />
      </ExpandWrap>
    </StyledItem>
  );
};

const SavedOrgsForm = ({ organization, removeOrganization }) => {
  if (!organization || organization === null || organization.length === 0) {
    return (
      <StyledForm>
        <EmptyText>Вы еще не сохранили ни одной организации</EmptyText>
      </StyledForm>
    );
  }

  const items = organization.map((org, index) => {
    return (
      <Item
        key={index}
        index={index}
        name={org.value}
        inn={org.data.inn}
        kpp={org.data.kpp}
        ogrn={org.data.ogrn}
        address={org.data.address.unrestricted_value}
        management={org.data.management.name}
        removeOrganization={removeOrganization}
      />
    );
  });

  return <StyledForm>{items}</StyledForm>;
};

export default SavedOrgsForm;

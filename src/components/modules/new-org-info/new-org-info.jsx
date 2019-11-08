import React from 'react';
import styled from 'styled-components';
import { colors, device, pxToRem } from '../../../theme/globalStyle';
import addNewIcon from '../../../img/add-new.svg';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  background-color: ${colors.light};
`;

const EmptyInfo = styled.div`
  display: flex;
  align-items: center;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

const EmptyImg = styled.div`
  margin-right: 32px;
  width: 68px;
  height: 68px;
  background: url(${addNewIcon}) center no-repeat;
  background-size: cover;
`;

const EmptyText = styled.span`
  max-width: 325px;
  color: ${colors.textThree};
`;

const Header = styled.header`
  padding: 5px 0;
  border-bottom: 1px solid ${colors.border};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftWrap = styled.div`
  padding-right: 30px;
  margin-bottom: 15px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

const RightWrap = styled.div`
  padding: 24px;
  background-color: ${colors.grayTwo};
`;

const Title = styled.h1`
  font-size: ${pxToRem(24)};
`;

const StyledGroup = styled.div`
  margin-bottom: 24px;

  :last-child {
    margin-bottom: 0;
  }
`;

const GroupTitle = styled.h2`
  margin-bottom: 10px;
`;

const GroupInfo = styled.span``;

const StyledNumberGroup = styled.div`
  margin-bottom: 5px;

  :last-child {
    margin-bottom: 0;
  }
`;

const NumberTitle = styled.span`
  margin-right: 15px;
  text-transform: uppercase;
  font-weight: 700;
`;

const NumberInfo = styled.span``;

const Group = ({ title, info }) => {
  return (
    <StyledGroup>
      <GroupTitle>{title}</GroupTitle>
      <GroupInfo>{info}</GroupInfo>
    </StyledGroup>
  );
};

const NumberGroup = ({ title, info }) => {
  return (
    <StyledNumberGroup>
      <NumberTitle>{title}</NumberTitle>
      <NumberInfo>{info}</NumberInfo>
    </StyledNumberGroup>
  );
};

const NewOrgInfo = ({ info }) => {
  if (!info || info === null) {
    return (
      <StyledWrap>
        <EmptyInfo>
          <EmptyImg />
          <EmptyText>Для добавления новой организации введите ее название, ИНН или адрес.</EmptyText>
        </EmptyInfo>
      </StyledWrap>
    );
  }

  return (
    <StyledWrap>
      <Header>
        <Title>{info.value}</Title>
      </Header>
      <Body>
        <LeftWrap>
          <Group title="Юридический адрес" info={info.data.address.unrestricted_value} />
          <Group title="Генеральный директор" info={info.data.management.name} />
        </LeftWrap>
        <RightWrap>
          <NumberGroup title="ИНН" info={info.data.inn} />
          <NumberGroup title="КПП" info={info.data.kpp} />
          <NumberGroup title="ОГРН" info={info.data.ogrn} />
        </RightWrap>
      </Body>
    </StyledWrap>
  );
};

export default NewOrgInfo;

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/globalStyle';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  background-color: ${colors.light};
`;
const Header = styled.header`
  padding: 5px 0;
  border-bottom: 1px solid ${colors.border};
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  width: 100%;
`;

const LeftWrap = styled.div`
  padding-right: 30px;
`;

const RightWrap = styled.div`
  padding: 24px;
  background-color: ${colors.grayTwo};
`;

const Title = styled.h1`
  font-size: 24px;
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
    return <StyledWrap></StyledWrap>;
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

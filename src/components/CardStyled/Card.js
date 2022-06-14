import { useState } from 'react';
import styled from 'styled-components';

import MyButton from '../MyButton/MyButton';
import { ActiveBtn, Btn, Card, CardInfo, Image, MyDate, Text, Title } from './styled';

const StyledMyBtn = styled(MyButton)`
  text-transform: uppercase;
  display: block;
`;

function CardStyled() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLogState() {
    setIsLoggedIn((prevState) => !prevState);
  }

  return (
    <Card>
      <Image src='https://picsum.photos/id/1025/600/600' alt='card header' />
      <CardInfo>
        <Title>New York {isLoggedIn.toString()}</Title>
        <Title dark={isLoggedIn}>New York</Title>
        <MyDate>2022</MyDate>
        <Text>
          Phasellus eget enim eu <span>lectus faucibus</span> vestibulum. Suspendisse
          sodales pellentesque elementum.
        </Text>
        <Text color='coral'>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </Text>
        <Btn onClick={changeLogState}>Buy tickets</Btn>
        <ActiveBtn onClick={changeLogState}>I am active btn</ActiveBtn>
        <StyledMyBtn onClick={changeLogState}>Buy tickets more</StyledMyBtn>
      </CardInfo>
    </Card>
  );
}

export default CardStyled;

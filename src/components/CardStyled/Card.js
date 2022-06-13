import { Btn, Card, CardInfo, Image, MyDate, Text, Title } from './styled';

function CardStyled() {
  return (
    <Card>
      <Image src='https://picsum.photos/id/1025/600/600' alt='card header' />
      <CardInfo>
        <Title>New York</Title>
        <MyDate>2022</MyDate>
        <Text>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </Text>
        <Btn>Buy tickets</Btn>
      </CardInfo>
    </Card>
  );
}

export default CardStyled;

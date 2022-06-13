import styled from 'styled-components';

const Card = styled.div`
  max-width: 30%;
  margin-left: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: top;
`;

const CardInfo = styled.div`
  background-color: #fff;
`;

const Title = styled.h3`
  font-weight: normal;
  font-size: 25px;
  margin-top: 0;
`;

const MyDate = styled.p`
  color: gray;
`;

const Text = styled.p`
  line-height: 1.3;
  color: #333;
`;

const Btn = styled.button`
  background-color: #333;
  color: snow;
  border: none;
  padding: 0.5em 1em;
`;

const css = {};

function CardStyled() {
  console.log('css ===', css);
  return (
    <Card>
      <Image src='https://picsum.photos/id/1025/600/600' alt='card header' />
      <CardInfo>
        <Title>New York</Title>
        <MyDate>2022</MyDate>
        <Text className={css.text}>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </Text>
        <Btn>Buy tickets</Btn>
      </CardInfo>
    </Card>
  );
}

export default CardStyled;

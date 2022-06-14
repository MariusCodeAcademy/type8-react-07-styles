import Container from '../Container';
import MyButton from '../MyButton/MyButton';
import css from './Card.module.css';

function Card() {
  console.log('css ===', css);
  return (
    <Container wide>
      <div className={`${css.card} container`}>
        <img
          className={css.img}
          src='https://picsum.photos/id/1025/600/600'
          alt='card header'
        />
        <div className={css.info}>
          <h3>New York</h3>
          <p className={css.date}>2022</p>
          <p className={css.text}>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
            pellentesque elementum.
          </p>
          <MyButton className={css.button}>Buy tickets</MyButton>
        </div>
      </div>
    </Container>
  );
}

export default Card;

import css from './Card.module.css';

function Card() {
  console.log('css ===', css);
  return (
    <div className={css.card}>
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
      </div>
    </div>
  );
}

export default Card;

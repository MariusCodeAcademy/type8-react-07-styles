import css from './MyButton.module.css';

function MyButton() {
  console.log('css ===', css);
  return <button className={css.btn}>I am button component</button>;
}

export default MyButton;

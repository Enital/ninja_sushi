import css from './card.module.css';

export default function Card() {
  const isHit = true;
  const isNew = true;
  return (
    <div className={css.card}>
      {isHit && <p>Hit</p>}
      {isNew && <p>New</p>}
    </div>
  );
}

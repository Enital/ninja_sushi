import css from './map.module.css';
export default function Map() {
  return (
    <div className={css.map}>
      <h3 className={css.mapTitle}>
        Каждая кухня работает со своей зоной доставки, чтобы привезти еду
        максимально быстро
      </h3>
    </div>
  );
}

import css from './map.module.css';
export default function Map() {
  return (
    <div className={css.container}>
      <div className={css.mapTitle}>
        <h3 className={css.mapTitleText}>
          Каждая кухня работает со своей зоной доставки, чтобы привезти еду
          максимально быстро
        </h3>
        <ul>
          <li>
            <div className={css.green}></div>
            <p> - Бесплатная доставка</p>
          </li>
          <li>
            <div className={css.yellow}></div>
            <p> - Платная доставка</p>
          </li>
          <li>
            <div className={css.red}></div>
            <p> - Доставку не делаем</p>
          </li>
        </ul>
      </div>

      <div className={css.map}></div>
    </div>
  );
}

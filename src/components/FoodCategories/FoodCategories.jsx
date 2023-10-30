import Category from 'components/Category/Category';

import sushi from './sushi.json';
import rolls from './rolls.json';
import sets from './sets.json';
import snacks from './snacks.json';

import css from './foodCategories.module.css';

export default function FoodCategories() {
  return (
    <div className={css.foodCategories}>
      <ul className={css.titleLine}>
        <li>
          <h2 className={css.title}>Суши</h2>
        </li>
        <li>
          <button className={css.button}>Смотреть все</button>
        </li>
      </ul>

      <Category items={sushi} />
      <ul className={css.titleLine}>
        <li>
          <h2>Роллы</h2>
        </li>
        <li>
          <button className={css.button}>Смотреть все</button>
        </li>
      </ul>

      <Category items={rolls} />
      <ul className={css.titleLine}>
        <li>
          <h2>Сеты</h2>
        </li>
        <li>
          <button className={css.button}>Смотреть все</button>
        </li>
      </ul>

      <Category items={sets} />
      <ul className={css.titleLine}>
        <li>
          <h2>Закуски</h2>
        </li>
        <li>
          <button className={css.button}>Смотреть все</button>
        </li>
      </ul>

      <Category items={snacks} />
    </div>
  );
}

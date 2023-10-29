import Category from 'components/Category/Category';

import sushi from './sushi.json';
import rolls from './rolls.json';

import css from './foodCategories.module.css';

export default function FoodCategories() {
  return (
    <div className={css.foodCategories}>
      <h2>Суши</h2>
      <Category items={sushi} />
      <h2>Роллы</h2>
      <Category items={rolls} />
    </div>
  );
}

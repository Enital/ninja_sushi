import Category from 'components/Card/Card';
import sushi from './sushi.json';

import css from './foodCategories.module.css';
export default function FoodCategories() {
  return (
    <div className={css.foodCategories}>
      <Category items={sushi} />
    </div>
  );
}

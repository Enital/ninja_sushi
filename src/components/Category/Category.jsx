import Card from 'components/Card/Card';
import items from './items.json';

import css from './foodCategories.module.css';
export default function FoodCategories() {
  console.log(items);
  return (
    <div className={css.foodCategories}>
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

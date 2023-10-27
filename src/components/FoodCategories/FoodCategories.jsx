import Card from 'components/Card/Card';
import items from './items.json';

export default function FoodCategories() {
  const items = 8;

  return (
    <div>
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

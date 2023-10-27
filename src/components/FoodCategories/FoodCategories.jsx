import Card from 'components/Card/Card';

export default function FoodCategories() {
  const items = 8;
  for (let i = 0; i < items; i++) {
    console.log(i);
  }
  return (
    <div>
      <Card />
    </div>
  );
}

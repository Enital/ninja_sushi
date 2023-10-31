import Card from 'components/Card/Card';

import css from './category.module.css';
export default function Category(items) {
  const data = items.items;
  // console.log(data);

  return (
    <div className={css.category}>
      {data.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

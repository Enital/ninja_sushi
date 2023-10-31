import heart from '../../images/icons/heart.svg';
import plus from '../../images/icons/plus.svg';
import chilli from '../../images/icons/chilli.svg';
import nature from '../../images/icons/nature.svg';
import lactose from '../../images/icons/lactose.svg';

import css from './card.module.css';

export default function Card(item) {
  const data = item.item;
  const isHit = data.hit;
  const isNew = data.new;
  const isChili = data.chili;
  // const isNature = true;
  const isNature = data.spicy;
  const isLactoseFree = true;
  // console.log(data);
  // console.log(item.new);
  return (
    <div className={css.card}>
      <div className={css.imgBlock}>
        <ul className={css.hitNew}>
          {isHit && <p className={css.hit}>Hit</p>}
          {isNew && <p className={css.new}>New</p>}
        </ul>

        <img src={data.img} alt="sushi" className={css.img} />
        <ul className={css.spices}>
          {isChili && (
            <li className={css.chilli}>
              <img src={chilli} alt="" />
            </li>
          )}
          {isNature && (
            <li className={css.nature}>
              <img src={nature} alt="" />
            </li>
          )}
          {isLactoseFree && (
            <li className={css.lactose}>
              <img src={lactose} alt="" className={css.lactose} />
            </li>
          )}
        </ul>
      </div>

      <div className={css.description}>
        <h2>Гункан Лосось</h2>
        <p>Вес: 40г</p>
        <p>
          Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное
          масло
        </p>
      </div>

      <ul className={css.bottomLine}>
        <p className={css.price}>
          190 <span className={css.currency}>грн</span>
        </p>
        <div className={css.heart}>
          {/* <CiHeart width={24} height={24} /> */}
          <img src={heart} alt="" />
        </div>
        <button type="button" className={css.addButton}>
          <img src={plus} alt="" />
        </button>
      </ul>
    </div>
  );
}

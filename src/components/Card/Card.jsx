import img from '../../images/sushi.png';
import heart from '../../images/icons/heart.svg';
import plus from '../../images/icons/plus.svg';
import chilli from '../../images/icons/chilli.svg';
import nature from '../../images/icons/nature.svg';
import lactoseFree from '../../images/icons/lactoseFree.svg';
import not from '../../images/icons/not.svg';

import css from './card.module.css';

export default function Card(item) {
  const isHit = true;
  const isNew = true;
  const isChili = true;
  const isNature = true;
  const isLactoseFree = true;
  console.log(item);
  return (
    <div className={css.card}>
      <div className={css.imgBlock}>
        {isHit && <p className={css.hit}>Hit</p>}
        {isNew && <p className={css.new}>New</p>}

        <img src={img} alt="sushi" className={css.img} />

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
            <li className={css.lactoseFree}>
              <img src={lactoseFree} alt="" className={css.lactose} />
              <img src={not} alt="" className={css.not} />
            </li>
          )}
        </ul>
      </div>

      <h2>Гункан Лосось</h2>
      <p>Вес: 40г</p>
      <p>
        Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное
        масло
      </p>
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

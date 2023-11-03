import bell from '../../images/icons/bell.svg';
import css from './header.module.css';

export default function Header() {
  return (
    <div className={css.header}>
      <h1>NINJA SUSHI</h1>
      <ul className={css.headerList}>
        <p>flag</p>
        <p>Киев</p>
        <p>RU</p>
      </ul>
      <ul className={css.headerList}>
        <li>Главная</li>
        <li>Доставка</li>
        <li>О нас</li>
        <li>Новости</li>
        <li>
          <p>tel</p>
          <p>+380 00 000 00 00</p>
        </li>
      </ul>
      <ul className={css.headerList}>
        <li>
          <button>
            <img src={bell} alt="" />
          </button>
        </li>
        <li>
          <button>
            <img src={bell} alt="" />
          </button>
        </li>
        <li>
          <button>
            <img src={bell} alt="" />
          </button>
        </li>
        <li>
          <button className={css.cartButton}>
            <p>Корзина</p>
            <img src={bell} alt="" />
          </button>
        </li>
      </ul>
    </div>
  );
}

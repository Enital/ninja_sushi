import rollIcon from '../../images/icons/roll.svg';

import css from './categoryBar.module.css';
export default function CategoryBar() {
  return (
    <div className={css.bar}>
      <ul className={css.barList}>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={rollIcon} alt="rollIcon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

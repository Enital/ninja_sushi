import FoodCategories from 'components/FoodCategories/FoodCategories';
import Footer from 'components/Footer/Footer';

import css from './mainPage.module.css';
export default function MainPage() {
  return (
    <div className={css.main}>
      <h1>MainPage</h1>
      <FoodCategories />
      <Footer />
    </div>
  );
}

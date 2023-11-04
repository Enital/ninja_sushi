import AdvertisingText from 'components/AdvertisingText/AdvertisingText';
import CategoryBar from 'components/CategoryBar/CategoryBar';
import FoodCategories from 'components/FoodCategories/FoodCategories';
import Footer from 'components/Footer/Footer';

import css from './mainPage.module.css';
export default function MainPage() {
  return (
    <div className={css.main}>
      <CategoryBar />
      <FoodCategories />
      <AdvertisingText />
      <Footer />
    </div>
  );
}

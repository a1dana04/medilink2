import { FC } from 'react';
import scss from './MainPage.module.scss';

const MainPage: FC = () => {
  return (
    <section className={scss.MainPage}>
      <div className='container'>
        <div className={scss.content}>MainPage</div>
      </div>
    </section>
  );
};

export default MainPage;
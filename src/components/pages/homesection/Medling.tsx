import { FC } from 'react';
import scss from './Medling.module.scss';

const Medling: FC = () => {
  return (
    <section className={scss.Medling}>
      <div className='container'>
        <div className={scss.content}>Medling</div>
      </div>
    </section>
  );
};

export default Medling;
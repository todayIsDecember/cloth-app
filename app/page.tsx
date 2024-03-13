import { getThreeReviews } from "./API/getThreeReviews";
import { getTopThreeProducts } from "./API/getTopThreeProducts";
import { Button, Product, Review } from "./components";
import styles from "./page.module.css";
import Image from 'next/image';

export default async function Home() {
  const products = await getTopThreeProducts();
  const reviews = await getThreeReviews();
  return (
    <main className={styles.main}>
      <div className={styles.previewPhoto}>
        <p className={styles.title}>Салон Тюлей та Штор</p>
        <p className={styles.subtitle}>Sofia</p>
      </div>
      <div className={styles.catalogSection}>
        <div className={styles.catalog}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Button appearance="black" size="l" className={styles.catalogButton}>Каталог</Button>
      </div>
      <div className={styles.advantagesSection}>
        <p className={styles.advantagesTitle}>Наші переваги</p>
        <div className={styles.advantages}>
          <div className={styles.advantage}>Блекаут льон - нова сучасна тканина. Блекаут льон або рогожка має всі переваги сонцезахисної тканини, і водночас має природну структуру лляної тканини</div>
          <div className={styles.advantage}>Мода на натуральні та природні матеріали тільки міцнішає з кожним днем і портьєри – не виняток. Тканина льон рогожка повною мірою задовольняє попит на універсальні щільні штори з натуральною лляною текстурою.</div>
          <div className={styles.advantage}>Особливості тканини black-out - вона практично не пропускає світло і не втрачає своїх властивостей з плином. часу у процесі її використання. Також тканина має здатність знижувати шуми (до 30%). <br/>
Характеристики: <br/>
-Великий асортимент кольорової гами; <br/>
-тканина блекаут, сонцезахисна, шумоізоляційна; <br/>
-Добре драпірується в склади; <br/>
-Не вибаглива у пранні та побуті; <br/>
-Не вигоряє колір на сонці. <br/>

Можливе пошиття штор на люверси або псевдолюверсну стрічку.</div>
        </div>
      </div>
      <div className={styles.reviewSection}>
        <div className={styles.reviewTitle}>Наші відгуки</div>
        <div className={styles.reviews}>
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <Button appearance="black" size="l" className={styles.reviewButton}>Усі відгуки</Button>
      </div>
    </main>
  );
}

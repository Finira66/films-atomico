// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./RecommendationSlider.module.scss";
import Image from "next/image";
import { IMovie } from "@/interfaces/movies.interface";
import Link from "next/link";
import {FC} from 'react';

interface RecommendationSliderProps {
  items: IMovie[],
  title: string
}

const RecommendationSlider: FC<RecommendationSliderProps> = ({ items, title }) => {
  const params = {
    spaceBetween: 20,
    slidesPerView: 5,
    navigation: true,
    modules: [Navigation]
  };

  return (
    <div className={styles.recommendations}>
      {title && (
        <div className="container">
          <div className={`title title--md ${styles.title}`}>Вам понравится</div>
        </div>
      )}
      <Swiper {...params} className={styles.slider}>
        {items?.map((item: IMovie) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <Link href={"/movie/" + item.id}>
              <Image
                src={item?.primaryImage?.url}
                alt="preview"
                width={0}
                height={0}
                sizes="100vw"
                className={styles["slider-image"]}
              />

              <div className={styles.name}>{item.titleText.text}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendationSlider;

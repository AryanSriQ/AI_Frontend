import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import "swiper/css";

const Card = ({ title, content, images, link }) => {
  return (
    <Link className={`${styles.card_container}`} to={link}>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className={`${styles.mySwiper}`}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`../../${img}`}
              alt="image"
              className={`${styles.card_image}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.content_container}`}>
        <h2 className={`${styles.heading}`}>{title}</h2>
        <p className={`${styles.content}`}>{content}</p>
      </div>
    </Link>
  );
};

export default Card;

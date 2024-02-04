import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import caro1 from "../../assets/carl_martin.webp";
import caro2 from "../../assets/cornerstone.webp";
import caro3 from "../../assets/game_changer.webp";

const Carousel = () => {
  const [caroNumber, setCaroNumber] = useState(2);
  const [prevCaroNumber, setPrevCaroNumber] = useState(-1);
  const [classToAdd, setClassToAdd] = useState(styles.caroImage2);

  const handleCaroBack = () => {
    if (caroNumber - 1 < 0) {
      setPrevCaroNumber(caroNumber);
      setCaroNumber(caroNumber + 2);
    } else {
      setPrevCaroNumber(caroNumber);
      setCaroNumber(caroNumber - 1);
    }
  };

  const handleCaroNext = () => {
    if (caroNumber + 1 > 4) {
      setPrevCaroNumber(caroNumber);
      setCaroNumber(caroNumber - 2);
    } else {
      setPrevCaroNumber(caroNumber);
      setCaroNumber(caroNumber + 1);
    }
  };

  useEffect(() => {
    if (prevCaroNumber == -1) {
      setClassToAdd(styles.caroImage2);
      console.log("No Prev Number");
    } else {
      console.log("Previous Number " + prevCaroNumber);
      switch (caroNumber) {
        case 0:
          if (prevCaroNumber == 1 && caroNumber == 0) {
            setClassToAdd(styles.caroImage1_0_3);
          }
          break;
        case 1:
          if (prevCaroNumber == 2 && caroNumber == 1) {
            setClassToAdd(styles.caroImage2_1);
          } else {
            setClassToAdd(styles.caroImage0_1);
          }
          break;
        case 2:
          if (
            (prevCaroNumber == 1 && caroNumber == 2) ||
            (prevCaroNumber == 4 && caroNumber == 2)
          ) {
            setClassToAdd(styles.caroImage1_2);
          } else {
            setClassToAdd(styles.caroImage3_2);
          }
          break;
        case 3:
          if (prevCaroNumber == 2 && caroNumber == 3) {
            setClassToAdd(styles.caroImage2_3);
          } else {
            setClassToAdd(styles.caroImage4_3);
          }
          break;
        case 4:
          if (prevCaroNumber == 3 && caroNumber == 4) {
            setClassToAdd(styles.caroImage3_4_1);
          }
          break;
      }
    }
  }, [caroNumber]);

  useEffect(() => {
    console.log("Current Number " + caroNumber);
  }, [caroNumber]);

  useEffect(() => {
    console.log(classToAdd);
  }, [classToAdd]);

  return (
    <div className={styles.container}>
      <div className={styles.spaceContainer}>
        <div className={styles.buttonContainer}>
          <button className={styles.caroButtonBack} onClick={handleCaroBack}>
            {"<"}
          </button>
        </div>
        <div className={styles.caroContainer}>
          <img src={caro3} className={classToAdd} />
          <img src={caro1} className={classToAdd} />
          <img src={caro2} className={classToAdd} />
          <img src={caro3} className={classToAdd} />
          <img src={caro1} className={classToAdd} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.caroButtonNext} onClick={handleCaroNext}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React from 'react'
import styles from "./Testimonials.module.css";
import testimonialsImg from "../../assets/images/testimonialsImg.png";
import quote from "../../assets/images/quote.svg";
import testimonialsleft from "../../assets/images/testimonialsLeft.svg";
import testimonialsRight from "../../assets/images/testimonialsRight.svg"

const Testimonials = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.testimonial}>
                    <p>Testimonials</p>
                    <h2>Word on the street</h2>
                </div>
                <div className={styles.TestimonialsInfo}>
                    <div className={styles.boxImg}>
                        <img src={testimonialsImg} alt="testimonialsImg" />
                    </div>
                    <div className={styles.boxInfo}>
                        <img src={quote} alt="quote" />
                        <p>
                            Jade helped us build a software
                            so intuitive that it didn't need
                            a walkthrough. He solved complex
                            problems with brilliant design.
                        </p>
                        <div className={styles.testimonialsleft}>
                            <span>John Frankin</span>
                            <p>Founder, Double Bunch</p>
                        </div>
                        <div className={styles.testimonialsRight}>
                            <img src={testimonialsleft} alt="testimonialsleft" />
                            <img src={testimonialsRight} alt="testimonialsRight" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;
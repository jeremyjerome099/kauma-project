import "./hero.scss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";


const textVariants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,

        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: "-100%",
    },
    animate: {
        x: "40%", // Move the text off-screen to the right
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            ease: "linear", 
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                 Drive Safe, Drive Confidently: Your Journey Starts Here!
                </motion.div>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={5000}
                    className="imageContainer"
                >
                    <div>
                        <img loading="lazy" src="/hero.png" alt="" />
                    </div>
                    <div>
                        <img loading="lazy" src="/hero2.png" alt="" />
                    </div>
                    <div>
                        <img loading="lazy" src="/hero3.png" alt="" />
                    </div>
                </Carousel>

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>KAUMA DRIVING SCHOOL</motion.h2>
                    <motion.h1 variants={textVariants}>Learn To Drive With Us</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>Learn More</motion.button>
                        <motion.button variants={textVariants} >Contact Us</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>

            </div>
        </div>

    );
};

export default Hero;



import "./courses.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Courses = () => {
    
    return (
        <motion.div className="courses" variants={variants} initial="initial" animate="animate">
            <motion.div className="textContainer" variants={variants}>
                <p className="top">
                    Our Courses Will Upskill You With Driving Training
                    <br />
                    <hr className="hr" />
                    And Road Safety
                </p>
                
                <div className="titleContainer" variants={variants}>
                    <div className="title">
                        <img src="/people.webp" alt="" />
                        <h1>
                            <motion.b whileHover={{color:"orange"}}>Courses</motion.b> We Offer
                        </h1>
                    </div>
                    <div className="title">
                        <h1>
                            <motion.b whileHover={{color:"orange"}}>At Our</motion.b> School. 
                        </h1>
                        <button>BEGIN THE JOURNEY</button>
                    </div>
                </div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div className="box" whileHover={{background:"lightgray", color:"black"}} variants={variants}>
                        <h2>Theoretical Course</h2>
                        <p className="bot">
                            This course covers the basics of road rules, traffic signs, and general driving knowledge. It usually involves classroom sessions where you learn about traffic laws, road signs, and safe driving practices.
                        </p>
                        <button>ENROLL</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray", color:"black"}} variants={variants}>
                        <h2>Practical Driving Lessons</h2>
                        <p className="bot">
                            You'll have one-on-one sessions with an instructor where you'll learn how to operate a vehicle safely in various road and traffic conditions. This includes basic maneuvers like starting, stopping, turning, parking, as well as more advanced skills like highway driving and defensive driving techniques.                    <p />
                        </p>
                        <button>ENROLL</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray", color:"black"}} variants={variants}>
                        <h2>Virtual Reality Training</h2>
                        <p className="bot">
                            Some driving schools offer simulated or virtual reality training to complement real-world driving lessons. These simulations can help you practice driving in different scenarios in a controlled environment before you hit the road.
                        </p>
                        <button>ENROLL</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background:"lightgray", color:"black"}} variants={variants}>
                        <h2>Driver's Education</h2>
                        <p className="bot">
                            This course focuses on developing the right attitude and mindset for safe driving. It covers topics like understanding the risks of driving, managing distractions, dealing with peer pressure, and the consequences of reckless driving. This course often includes discussions, videos, and interactive activities to engage students and promote responsible driving behavior.
                        </p>
                        <button>ENROLL</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Courses;
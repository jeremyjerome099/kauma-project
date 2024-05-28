import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
          staggeredChildren: 0.1,
        },
    },
    closed: {
        transition: {
          staggeredChildren: 0.05,
          staggeredDirection: -1,
        },
    },
};


const Links = () => {
    const items = [
        "Homepage",
        "Branches",
        "About",
        "Courses",
        "Our Team",
        "Contact",
        String.fromCharCode(160), 
        <span className="small-font">&copy; 2024</span>
    ];

    return (
        <motion.div className='links' variants={variants}>
            {items.map((item, index) => (
                <a href={`#${item}`} key={index}>
                    {item}
                </a>
            ))}
        </motion.div>
    );
};

export default Links;

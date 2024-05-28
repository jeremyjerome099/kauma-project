import "./navbar.scss";
import { motion } from "framer-motion";
import { ClockIcon } from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/20/solid";
import Sidebar from "../sidebar/Sidebar";


const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */} 
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MapPinIcon className="map" />
                     Kapmaso, Kabianga, Kericho P.O.BOX 010-100&nbsp;&nbsp;&nbsp;
                    <ClockIcon className="clock" />
                    MON - FRI:8:00A.M - 8:00P.M
                </motion.span>
                <div className="social">
                    <a href="#">
                        <img src="./facebook.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="./instagram.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="./youtube.png" alt="" />
                    </a>
                    <a href="https://wa.me/0722566459">
                        <img src="./dribbble.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
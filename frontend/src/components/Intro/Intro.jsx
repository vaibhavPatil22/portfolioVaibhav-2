import React, { useContext} from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/vaibs1-removebg-preview2 copy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const [rerender, setRerender] = useState(false);
  const handleIconClick = () => {
    // Toggle the state to trigger re-render
    // setRerender((prev) => !prev);
  };


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Vaibhav Patil</span>
          <span>
            "Hello, I'm Vaibhav, a seasoned Full Stack Developer proficient in
            MERN stack technologies. With a focus on creating visually
            captivating and user-friendly interfaces, I bring extensive
            experience in web design and development. Passionate about
            delivering high-quality solutions, I thrive on staying ahead of
            industry trends and contributing innovative ideas to projects, I bring a holistic approach to software development, combining technical proficiency with a passion for innovation and a dedication to excellence. I am excited about the prospect of collaborating with you to create impactful and memorable digital experiences that resonate with users and drive business success."
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/vaibhavPatil222" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" onClick={handleIconClick} />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-patil-3b695b23a/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" onClick={handleIconClick} />
          </a>
          <a href="https://www.instagram.com/vaibs_patil" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" onClick={handleIconClick} />
          </a>
        </div>
      </div>
     
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

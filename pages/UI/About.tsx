import { useState } from "react";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import {
  AiFillLinkedin,
  AiFillSkype,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const About = () => {
  const introText = {
    intro1: `Hi, I am Dung Ngo (June), a software engineer with years of experience, open to new opportunities.`,
    intro2: `My expertise lies in crafting intuitive user interfaces and scalable web applications. I am proficient in JavaScript and responsive design, excelling at translating design mock-ups into responsive UI components that ensure seamless cross-device functionality.`,
    intro3: `With a detail-oriented, proactive approach, I thrive in fast-paced environments, consistently delivering high-quality solutions on time and within budget. I am passionate about web app development and committed to continuous learning and staying updated with industry trends. I am also enhancing my skill set and continually updating my knowledge of new technologies to become an expert in my domain.`,
  };
  const [showMoreButton, setShowMoreButton] = useState({
    isShow: false,
    buttonColor: "",
    onShowBtnText: "More about me...",
    onHideBtnText: "Hide",
  });

  return (
    <div className="md:pt-5 pb-16">
      <div className="mt-20 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-5 rounded-full w-80 h-80 p-4 md:w-60 md:h-60 md:p-2">
        <div className="relative mx-auto w-72 h-72 rounded-full overflow-hidden md:w-56 md:h-56">
          <Image
            alt="profile-img"
            src={avatar}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl py-1 text-teal-600 font-medium font-lobstertwo dark:text-teal-300">
          Dung Ngo (June)
        </h2>
        <h3 className="text-2xl py-2 text-orbitron dark:text-white">
          Software Engineer
        </h3>
        <div className="text-3xl flex justify-center gap-5 text-gray-600 dark:text-white">
          <a
            href="https://linkedin.com/in/dungnnt"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="skype:dungngo.nntd?userinfo"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillSkype />
          </a>
          <a
            href="https://wa.me/01123517047?text=Hello%20there,%20I%20am%20ready%20to%20talk!"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
          <a href="mailto:dungngo.nntd@gmail.com">
            <AiFillMail />
          </a>
        </div>
        <div className="m:mx-60">
          <p className="text-md py-2 text-gray-800 max-w-xl mx-auto dark:text-white">
            <ul>
              <li className="mb-5">{introText.intro1}</li>
              {showMoreButton.isShow && (
                <>
                  <li className="mb-5">{introText.intro2}</li>
                  <li>{introText.intro3}</li>
                </>
              )}
            </ul>
          </p>
          <button
            className={`${
              showMoreButton.isShow
                ? "bg-gray-500 hover:bg-gray-700"
                : "bg-teal-500 hover:bg-teal-700"
            } text-white font-bold py-2 px-8 rounded mt-10`}
            onClick={() =>
              setShowMoreButton({
                ...showMoreButton,
                isShow: !showMoreButton.isShow,
              })
            }
          >
            {showMoreButton.isShow
              ? showMoreButton.onHideBtnText
              : showMoreButton.onShowBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

import {
  AiFillLinkedin,
  AiFillSkype,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white pb-10 dark:bg-gray-900">
      <div className="text-2xl flex justify-center gap-5 text-gray-600 dark:text-white">
        <a href="https://linkedin.com/in/dungnnt">
          <AiFillLinkedin />
        </a>
        <a href="skype:dungngo.nntd?userinfo">
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
      <div className="text-center text-xs pt-3 leading-6 dark:text-white">
        <p>Copyright © {currentYear} - All Right Reserved</p>
        <p>Designed by June D. Ngo</p>
      </div>
    </div>
  );
};
export default Footer;

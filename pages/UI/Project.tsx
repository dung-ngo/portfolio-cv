import Image from "next/image";
import bosch from "../../public/bosch.png";
import vive from "../../public/vivegreen.png";
import bepnhavegan from "../../public/bepnhavegan.jpg";
import classes from "./Project.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Project = () => {
  return (
    <div>
      <div className="my-10">
        <h3 className="text-3xl font-bold dark:text-white">
          {`Website/WebApp I've made`}
        </h3>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:grow">
            <div className={classes["center-image"]}>
              <Image alt="vive" src={vive} width={200} height={200} />
            </div>
            <div className={classes["project-tech"]}>
              <h3 className="text-lg font-medium pt-8 pb-2">Technologies</h3>
              <hr className="mb-5 border-solid border-gray-500" />
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Strapi</p>
            </div>
            <a href="https://vive.org.vn/" target="_blank" rel="noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-10">
                Visit
              </button>
            </a>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:grow">
            <div className={classes["center-image"]}>
              <Image
                alt="bepnhavegan"
                src={bepnhavegan}
                width={200}
                height={200}
              />
            </div>
            <div className={classes["project-tech"]}>
              <h3 className="text-lg font-medium pt-8 pb-2">Technologies</h3>
              <hr className="mb-5 border-solid border-gray-500" />
              <p className="text-gray-800 py-1">Wordpress</p>
            </div>
            <a href="https://bepnhavegan.com/" target="_blank" rel="noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-10">
                Visit
              </button>
            </a>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:grow">
            <div className={classes["center-image"]}>
              <Image alt="bosch" src={bosch} width={200} height={200} />
            </div>
            <div className={classes["project-tech"]}>
              <div className="flex justify-center">
                <h3 className=" text-lg font-medium md:pt-8 pb-2">Projects</h3>
                <div className="ml-1">
                  <AiOutlineInfoCircle
                    className="text-gray-500 text-xl"
                    title="unable to share due to a signed NDA"
                    size={20}
                  />
                </div>
              </div>
              <hr className="mb-5 border-solid border-gray-500" />
              <p className="text-gray-800 md:py-1 sm:pb-1 sm:text-sm">
                Automotive solutions
              </p>
              <p className="text-gray-800 md:py-1 sm:pb-1 sm:text-sm">
                Learning search portal
              </p>
              <p className="text-gray-800 md:py-1 sm:text-sm">
                Customer requirement server
              </p>
              <p className="text-gray-800 text-xs md:py-1">
                (React.js, TypeScript, .Net, Sharepoint API, AWS, Azure)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

import Image from "next/image";
import programming from "../../public/languages.png";
import framework from "../../public/frameworks.png";
import tools from "../../public/tools.png";
import classes from "./Skillset.module.css";

const Skillset = () => {
  return (
    <div>
      <div className="my-10">
        <h3 className="text-3xl font-bold dark:text-white">Technical skills</h3>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:grow">
            <div className={classes["center-image"]}>
              <Image
                alt="languages"
                src={programming}
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">Main Technologies</h3>
            <hr className="mb-5 border-solid border-gray-500" />
            <p className="text-gray-800 py-1">React.js</p>
            <p className="text-gray-800 py-1">Next.js</p>
            <p className="text-gray-800 py-1">TypeScript</p>
            <p className="text-gray-800 py-1">Golang (API Integration)</p>
            <p className="text-gray-800 py-1">Responsive Web App</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:grow">
            <div className={classes["center-image"]}>
              <Image
                alt="frameworks"
                src={framework}
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">Libraries</h3>
            <hr className="mb-5 border-solid border-gray-500" />
            <p className="text-gray-800 py-1">Tailwinds CSS</p>
            <p className="text-gray-800 py-1">Prime React</p>
            <p className="text-gray-800 py-1">Material UI</p>
            <p className="text-gray-800 py-1">Semantics UI</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:grow">
            <div className={classes["center-image"]}>
              <Image alt="code-img" src={tools} width={100} height={100} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">Tools</h3>
            <hr className="mb-5 border-solid border-gray-500" />
            <p className="text-gray-800 py-1">IDE (WebStorm, VS Code,...)</p>
            <p className="text-gray-800 py-1">Postman</p>
            <p className="text-gray-800 py-1">Azure DevOps</p>
            <p className="text-gray-800 py-1">CI/CD (GitHub/ Gitlab)</p>
            <p className="text-gray-800 py-1">Heroku/Vercel/Netlify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;

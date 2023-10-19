import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className={
        "fixed bottom-0 bg-gray-900 py-0.5 w-full text-white text-center"
      }
    >
      <Link
        to={"https://www.github.com/Arisablad"}
        target={"_blank"}
        className={"hover:text-blue-500 transition duration-500"}
      >
        Coded by Arisablad
      </Link>
    </div>
  );
}

export default Footer;

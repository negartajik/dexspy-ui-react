import darkLogo from "../../assets/images/logo-icon-white.png";
import logoName from "../../assets/images/logo-name.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    // <Link
    //   to="/" className="ml-5 flex w-28 outline-none sm:w-36 4xl:w-36"
    // >
      <span className="relative flex overflow-hidden">
          <img src={darkLogo} alt="DexSpy" height={28} priority />
          <img src={logoName} alt="DexSpy" height={28} priority />
      </span>
    // </Link>
  );
};
export default Logo;

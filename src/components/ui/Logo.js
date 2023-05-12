import logoName from "../../assets/images/logo-name.png";
import darkLogo from "../../assets/images/logo-icon-white.png";
import { Link } from "react-router-dom";
import routes from '../../config/routes';

const Logo = () => {
  return (
    <Link
      to={routes.home} className="ml-5 flex w-28 outline-none sm:w-36 4xl:w-36"
    >
      <span className="relative flex overflow-hidden">
      <img src={darkLogo} alt="DexSpy" height={28} width={28}  />
          <img src={logoName} alt="DexSpy" className="ml-2" height={28} width={103}/>
      </span>
     </Link>
  );
};
export default Logo;

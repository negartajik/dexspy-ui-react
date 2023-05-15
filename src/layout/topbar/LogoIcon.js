import React from 'react'
import darkLogo from "../../assets/images/logo-icon-white.png";

const LogoIcon = () => {
  return (
    <div className="flex cursor-pointer outline-none" >
      <span className="relative flex overflow-hidden">
      <img src={darkLogo} alt="DexSpy" height={28} width={28} />
      </span>
    </div>
  )
}

export default LogoIcon
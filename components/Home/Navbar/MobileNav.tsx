import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

// Props type 
type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"; // Fixed transform value

  return (
    <div>
      {/* {Overlay} */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[90] bg-black opacity-70 w-full h-screen`}></div>
      {/* {navlinks} */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 delay-300 inset-0 z-[100] text-white justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6`}>
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <span className="nav__link text-[30px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              {navlink.label}
            </span>
          </Link>
        ))}
        {/* {Close Button} */}
        <CgClose 
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
          onClick={closeNav} // Added close functionality
          aria-label="Close navigation" // Added accessibility label
        />
      </div>
    </div>
  )
}

export default MobileNav;

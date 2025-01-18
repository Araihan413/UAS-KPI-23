import Logo from "../Elements/Logo"
import logoAngkatan from '/logo/logo-angkatan.png'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import Button from "../Elements/Button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavbarMiddle = () => {
  const [isShowElemen, setIsShowElemen] = useState(window.innerWidth >= 1024)
  const handleNavigasi = () => {
    setIsShowElemen(!isShowElemen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsShowElemen(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggle = {
    hidden: { width: 0, height: 0, padding: 0, transition: { duration: 0.3 } },
    show: { padding: 40, width: 250, height: 450, transition: { duration: 0.3 } },
  };


  return (
    <>
      <div className="flex justify-between items-center lg:justify-start pl-4 py-2 gap-10 mt-16 lg:mt-0 bg-slate-200/40 backdrop-blur md:rounded-2xl px-4 relative">
        <div className="flex items-center gap-2">
          <Logo width="w-12" height="w-12" src={logoAngkatan} alt="logo angkatan" />
          <h1 className="font-primer italic font-bold text-2xl">KPI 23</h1>
        </div>
        <div className="lg:hidden flex" onClick={handleNavigasi}>
          <Button bg="bg-stone-400/30" type="button" >
            <HiMenuAlt1 className="text-4xl" />
          </Button>
        </div>
        {isShowElemen && (
          <motion.ul
            variants={toggle}
            initial={window.innerWidth >= 1024 ? "" : "hidden"}
            animate={window.innerWidth >= 1024 ? "" : "show"}
            className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center font-sekunder font-medium lg:space-x-4 absolute top-20 lg:top-0 right-0 lg:static w-max h-max bg-stone-200/90 lg:bg-transparent  lg:p-0 mr-5 lg:mr-0 rounded-xl rounded-tr-none lg:rounded-none"
          >
            <li className="text-center cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
              <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/">Semua</NavLink>
            </li>
            <li className="text-center cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
              <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/artikel">Artikel</NavLink>
            </li>
            <li className="text-center cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
              <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/video">Video</NavLink>
            </li>
            <li className="text-center cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
              <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/video animasi">Video Animasi</NavLink>
            </li>
            <li className="text-center cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
              <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/visual">Visual</NavLink>
            </li>
            <li className="text-center cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
              <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/audio">Audio</NavLink>
            </li>
            <li className="text-center cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
              <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/audio visual">Audio Visual</NavLink>
            </li>
          </motion.ul>
        )}
      </div>
    </>
  )
}
export default NavbarMiddle
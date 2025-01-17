import Logo from "../Elements/Logo"
import logoAngkatan from '/logo/logo-angkatan.png'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import Button from "../Elements/Button";
import { useState } from "react";
import { motion } from "framer-motion";
const NavbarMiddle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigasi = () => {
    setIsOpen(!isOpen)
  }

  const toggle = {
    hidden: { x: 500, transition: { duration: 0.3 } },
    show: { x: 0, transition: { duration: 0.3 } },
  };


  return (
    <>
      <div className="flex justify-between items-center md:justify-start pl-4 py-2 gap-10 mt-16 md:mt-0 bg-slate-200/40 backdrop-blur md:rounded-2xl px-4">
        <div className="flex items-center gap-2">
          <Logo width="w-12" height="w-12" src={logoAngkatan} alt="logo angkatan" />
          <h1 className="font-primer italic font-bold text-2xl">KPI 23</h1>
        </div>
        <div className="md:hidden flex" onClick={handleNavigasi}>
          <Button bg="bg-stone-400/30" type="button" >
            <HiMenuAlt1 className="text-4xl" />
          </Button>
        </div>

        <motion.ul
          variants={window.innerWidth >= 768 ? "" : toggle}
          initial={window.innerWidth >= 768 ? "" : "hidden"}
          animate={window.innerWidth >= 768 ? "" : isOpen ? "show" : "hidden"}
          className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center font-sekunder font-medium lg:space-x-4 absolute top-20 lg:top-0 right-0 lg:static w-max h-max bg-white lg:bg-transparent p-10 lg:p-0 mr-5 lg:mr-0 rounded-xl rounded-tr-none lg:rounded-none"
        >
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/">Semua</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/artikel">Artikel</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/video">Video</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/visual">Visual</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/audio">Audio</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md h-max w-full md:w-max">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/audio visual">Audio Visual</NavLink>
          </li>
        </motion.ul>
      </div>
    </>
  )
}
export default NavbarMiddle
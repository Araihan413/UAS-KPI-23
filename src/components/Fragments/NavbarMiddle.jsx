import Logo from "../Elements/Logo"
import logoAngkatan from '/logo/logo-angkatan.png'
import { NavLink } from 'react-router-dom'
const NavbarMiddle = () => {
  return (
    <>
      <div className="flex p-4 gap-10 mt-16 md:mt-0 bg-slate-200/40 backdrop-blur rounded-2xl px-4 overflow-x-scroll md:overflow-x-hidden">
        <div className="flex items-center gap-2">
          <Logo width="w-10" height="w-10" src={logoAngkatan} alt="logo angkatan" />
          <h1 className="font-primer italic font-bold">KPI 23</h1>
        </div>
        <ul className="flex font-sekunder font-medium space-x-4">
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md ">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/">Semua</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/video">Video</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/visual">Visual</NavLink>
          </li>
          <li className="cursor-pointer rounded-lg overflow-hidden shadow-md">
            <NavLink className={({ isActive }) => (isActive ? 'active block px-4 py-2' : 'block px-4 py-2 bg-slate-200 hover:bg-slate-300')} to="/audio">Audio</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
export default NavbarMiddle
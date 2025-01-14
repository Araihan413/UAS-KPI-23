import Logo from '../Elements/Logo'
import logoUniv from "/logo/logo-univ.png"
import logoProdi from "/logo/logo-prodi.png"
const LogoBarTop = () => {
  return (
    <>
      <div className='flex justify-between items-center px-4'>
        <Logo width="w-14" height="h-14" src={logoProdi} alt="logo universitas" style="shadowRounded shadow-white bg-white rounded-full" />
        <Logo width="w-14" height="h-14" src={logoUniv} alt="logo prodi" style="shadowRounded shadow-white bg-white rounded-full" />
      </div>
    </>
  )
}
export default LogoBarTop
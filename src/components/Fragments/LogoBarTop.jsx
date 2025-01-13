import Logo from '../Elements/Logo'
import logoUniv from "/logo/logo-univ.png"
import logoProdi from "/logo/logo-prodi.png"
const LogoBarTop = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <Logo width="w-20" height="h-20" src={logoProdi} alt="logo universitas" />
        <Logo width="w-20" height="h-20" src={logoUniv} alt="logo prodi" />
      </div>
    </>
  )
}
export default LogoBarTop
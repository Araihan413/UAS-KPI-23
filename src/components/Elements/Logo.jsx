
const Logo = (props) => {
  const { width, height, src, alt, style = "" } = props
  return (
    <>
      <div className="w-max h-max ">
        <img className={`${width} ${height} ${style}`} src={src} alt={alt} />
      </div>
    </>
  )
}
export default Logo
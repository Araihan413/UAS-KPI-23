
const Logo = (props) => {
  const { width, height, src, alt } = props
  return (
    <>
      <div className="w-max h-max ">
        <img className={`${width} ${height}`} src={src} alt={alt} />
      </div>
    </>
  )
}
export default Logo
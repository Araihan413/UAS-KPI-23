
const Button = (props) => {
  const { bg, children, type = "button", style = '' } = props
  return (
    <>
      <button type={type} name={type} className={`${bg} py-2 px-4 rounded-md shadow-md ${style}`}>{children}</button>
    </>
  )
}
export default Button
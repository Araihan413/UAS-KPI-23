const Button = (props) => {
  const { bg, text, type = "button", style = '' } = props
  return (
    <>
      <button type={type} name={type} className={`${bg} py-2 px-4 rounded-md shadow-md ${style}`}>{text}</button>
    </>
  )
}
export default Button
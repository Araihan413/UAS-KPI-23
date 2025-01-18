import MainPageTemplate from "../Template/MainPageTemplate"
const VisualPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={false} videoAnimasi={false} visual={true} audio={false} artikel={false} audioVisual={false} />
      </div>
    </>
  )
}
export default VisualPage
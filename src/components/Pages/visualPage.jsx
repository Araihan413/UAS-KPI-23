import MainPageTemplate from "../Template/MainPageTemplate"
const VisualPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={false} visual={true} audio={false} artikel={false} audioVisual={false} />
      </div>
    </>
  )
}
export default VisualPage
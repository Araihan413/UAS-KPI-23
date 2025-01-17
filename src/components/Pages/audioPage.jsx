import MainPageTemplate from "../Template/MainPageTemplate"
const AudioPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={false} visual={false} audio={true} artikel={false} audioVisual={false} />
      </div>
    </>
  )
}
export default AudioPage
import MainPageTemplate from "../Template/MainPageTemplate"
const AudioVisualPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={false} visual={false} audio={false} artikel={false} audioVisual={true} />
      </div>
    </>
  )
}
export default AudioVisualPage
import MainPageTemplate from "../Template/MainPageTemplate"
const VideoAnimasiPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={false} videoAnimasi={true} visual={false} audio={false} artikel={false} audioVisual={false} />
      </div>
    </>
  )
}
export default VideoAnimasiPage
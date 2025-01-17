import MainPageTemplate from "../Template/MainPageTemplate"
const VideoPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={true} visual={false} audio={false} artikel={false} audioVisual={false} />
      </div>
    </>
  )
}
export default VideoPage
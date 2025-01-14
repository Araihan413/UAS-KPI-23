import MainPageTemplate from "../Template/MainPageTemplate"
const AudioPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={false} visual={false} audio={true} />
      </div>
    </>
  )
}
export default AudioPage
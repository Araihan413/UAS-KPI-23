import MainPageTemplate from "../Template/MainPageTemplate"
const Home = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={true} visual={true} audio={true} artikel={true} audioVisual={true} />
      </div>
    </>
  )
}
export default Home
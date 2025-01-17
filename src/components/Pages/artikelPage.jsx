import MainPageTemplate from "../Template/MainPageTemplate"
const ArtikelPage = () => {
  return (
    <>
      <div>
        <MainPageTemplate video={false} visual={false} audio={false} artikel={true} audioVisual={false} />
      </div>
    </>
  )
}
export default ArtikelPage
import LogoBarTop from "../Fragments/LogoBarTop"
import BennerKPI from "../Fragments/BennerKPI"
import ImageParallaxScroll from "../Elements/ImageParallaxScroll"
import imageFotbar1 from '/image/image-fotbar-1.jpg'
import imageFotbar2 from '/image/image-fotbar-2.jpg'
import imageFotbar3 from '/image/image-fotbar-3.jpg'
import imageFotbar4 from '/image/image-fotbar-4.jpg'
import imageFotbar5 from '/image/image-fotbar-5.jpg'
import imageFotbar6 from '/image/image-fotbar-6.jpg'
import imageFotbar7 from '/image/image-fotbar-7.jpg'
import imageFotbar8 from '/image/image-fotbar-8.jpg'
import imageFotbar9 from '/image/image-fotbar-9.jpg'
import imageFotbar10 from '/image/image-fotbar-10.jpg'
import imageFotbar11 from '/image/image-fotbar-11.jpg'
import imageFotbar12 from '/image/image-fotbar-12.jpg'
import BarSearch from "../Fragments/BarSearch"
import NavbarMiddle from "../Fragments/NavbarMiddle"

const imgFotbar1 = [imageFotbar1, imageFotbar2, imageFotbar3, imageFotbar4, imageFotbar5, imageFotbar6, imageFotbar1, imageFotbar2, imageFotbar3, imageFotbar4]
const imgFotbar2 = [imageFotbar7, imageFotbar8, imageFotbar9, imageFotbar10, imageFotbar11, imageFotbar12, imageFotbar7, imageFotbar8, imageFotbar9, imageFotbar10]

const MainPageTemplate = (props) => {
  const { video, visual, audio } = props
  return (
    <>
      <div className="relative">
        <header className="flex flex-col lg:h-screen h-screen md:h-[75vh] w-full bg-wall">
          <div className="flex flex-col h-full md:m-10 my-10 border-8 bg-white shadow-full-bold">
            <section className="relative">
              <ImageParallaxScroll baseVelocity={-4} image={imgFotbar1} />
            </section>
            <div className="absolute top-0 left-0 right-0 pt-4">
              <LogoBarTop />
            </div>
            <div className="h-full flex justify-center items-center">
              <BennerKPI />
            </div>
            <section className="relative">
              <ImageParallaxScroll baseVelocity={4} image={imgFotbar2} />
            </section>
          </div>
        </header>
        <section className="md:px-20 sticky top-0 md:mt-10 md:pt-5">
          <NavbarMiddle />
        </section>
        <main className="flex flex-col md:px-20">
          <BarSearch id="search" type='search' placeholder='Cari Nama...' video={video} visual={visual} audio={audio} />
        </main>
      </div>
    </>
  )
}
export default MainPageTemplate
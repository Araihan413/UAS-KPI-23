import CardVideo from "../Elements/CardVideo"
import { FaPhotoVideo } from "react-icons/fa";
const VideoContainer = ({ dataVideo }) => {
  return (
    <>
      <div className="pb-20 ">
        <div className="flex flex-col justify-center md:justify-start mb-5 w-full md:w-max gap-2 items-center">
          <div className="flex space-x-2 ">
            <FaPhotoVideo className="text-2xl leading-none text-red-500" />
            <h1 className="font-sekunder text-2xl font-bold leading-none">Animasi</h1>
          </div>
          <div className="flex space-x-1">
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-2 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {dataVideo.map((item) => {
            return (
              <CardVideo key={item.id} idVideo={item.id_video} idChannel={item.id_channel} nama={item.nama} type={item.type_video} />
            )
          })}
        </div>
      </div>
    </>
  )
}
export default VideoContainer
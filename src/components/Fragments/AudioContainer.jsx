import { AiFillAudio } from "react-icons/ai";
import CardAudio from '../Elements/CardAudio'

const AudioContainer = ({ dataAudio }) => {
  return (
    <>
      <div className="pb-20">
        <div className="flex flex-col justify-center md:justify-start mb-5 w-full md:w-max gap-2 items-center">
          <div className="flex space-x-2 ">
            <AiFillAudio className="text-2xl leading-none text-red-500" />
            <h1 className="font-sekunder text-2xl font-bold leading-none">Audio</h1>
          </div>
          <div className="flex space-x-1">
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-2 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {dataAudio.map((item) => {
            return (
              <div key={item.id}>
                <CardAudio idVideo={item.id_video} idChannel={item.id_channel} nama={item.nama} type={item.type_audio} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default AudioContainer
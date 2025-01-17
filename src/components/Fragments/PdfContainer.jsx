import CardPdf from "../Elements/CardPdf"
import { MdPictureAsPdf } from "react-icons/md";
import visual1 from '/pdf/Rina Anggraini.png'
import visual2 from '/pdf/sri amalia indah R.jpg'
import visual3 from '/pdf/haikal aditya.jpg'
const listPdf = [visual1, visual2, visual3]

const PdfContainer = ({ dataVisual }) => {
  return (
    <>
      <div className="pb-20">
        <div className="flex flex-col justify-center md:justify-start mb-5 w-full md:w-max gap-2 items-center">
          <div className="flex space-x-2 ">
            <MdPictureAsPdf className="text-2xl leading-none text-red-500" />
            <h1 className="font-sekunder text-2xl font-bold leading-none">Poster</h1>
          </div>
          <div className="flex space-x-1">
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-2 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {dataVisual.map((item) => {
            return (
              <div key={item.id}>
                <CardPdf pdf={listPdf[item.id - 1]} nama={item.nama} type={item.type_visual} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default PdfContainer
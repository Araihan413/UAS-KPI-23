import CardArtikel from "../Elements/CardArtikel"
import { BsFileEarmarkTextFill } from "react-icons/bs";
import bennerBerita1 from '/image/image002.jpg'
import bennerBerita2 from '/image/diyah2.png'
import bennerBerita3 from '/image/nadiyah1.jpg'
const listArtikel = [bennerBerita1, bennerBerita2, bennerBerita3]
const ArtikelContainer = ({ dataArtikel }) => {
  return (
    <>
      <div className="pb-20">
        <div className="flex flex-col justify-center md:justify-start mb-5 w-full md:w-max gap-2 items-center">
          <div className="flex space-x-2 ">
            <BsFileEarmarkTextFill className="text-2xl leading-none text-red-500" />
            <h1 className="font-sekunder text-2xl font-bold leading-none">Artikel</h1>
          </div>
          <div className="flex space-x-1">
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-2 h-1 rounded-lg bg-blue-200"></span>
            <span className="w-20 h-1 rounded-lg bg-blue-200"></span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {dataArtikel.map((item) => {
            return (
              <div key={item.id}>
                <CardArtikel nama={item.nama} type={item.type_text} src={listArtikel[item.id - 1]} judul={item.judul} paragraf={item.deskripsi} lokasiArtikel={item.lokasi_artikel} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default ArtikelContainer
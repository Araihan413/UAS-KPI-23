import { Link } from "react-router-dom"
const CardArtikel = (props) => {
  const { src, nama, type, judul, paragraf, lokasiArtikel } = props
  return (
    <>
      <div className="rounded-lg">
        <Link to={`/artikel/${lokasiArtikel}`}>
          <div className="p-5 flex gap-5">
            <div className="w-40 h-36 rounded-md overflow-hidden shrink-0">
              <img className="hover:scale-125 transition w-full h-full" src={src} alt="foto profil artikel" />
            </div>
            <article className="hover:text-blue-400 transition">
              <div className="mb-4">
                <h1 className="text-sm text-[#797979] leading-none">{nama} | {type}</h1>
              </div>
              <div className="w-full  lg:w-8/12">
                <h1 className="font-sekunder text-2xl font-medium">{judul}</h1>
                <p className="font-sekunder text-base font-normal line-clamp-2">{paragraf}</p>
              </div>
            </article>
          </div>
        </Link>
      </div>
    </>
  )
}
export default CardArtikel
import ArtikelPageTemplate from "../Template/ArtikelPageTemplate"
import { ContentArtikel1, ContentArtikel2, ContentArtikel3 } from "../Fragments/ContentArtikel"
export const ReadArtikelPage1 = () => {
  return (
    <>
      <div>
        <ArtikelPageTemplate >
          <ContentArtikel1 />
        </ArtikelPageTemplate >
      </div>
    </>
  )
}
export const ReadArtikelPage2 = () => {
  return (
    <>
      <div>
        <ArtikelPageTemplate >
          <ContentArtikel2 />
        </ArtikelPageTemplate >
      </div>
    </>
  )
}
export const ReadArtikelPage3 = () => {
  return (
    <>
      <div>
        <ArtikelPageTemplate >
          <ContentArtikel3 />
        </ArtikelPageTemplate >
      </div>
    </>
  )
}
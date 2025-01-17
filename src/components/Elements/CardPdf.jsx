import Button from './Button'
import { FaFilePdf } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';
import fotoProfil from '/icon/profile.png'

const CardPdf = (props) => {
  const { pdf, nama, type } = props;
  return (
    <>
      <div className="flex justify-start pb-5 gap-5 flex-col rounded-md font-sekunder shadow-full-light w-max bg-slate-100">
        <article className=" rounded-md overflow-hidden w-max border-2">
          <iframe allowFullScreen src={pdf} width="350px" height="228px" className='object-contain border-none' />
        </article>
        <div className='pl-4 flex space-x-3'>
          <figure>
            <img className='w-10 h-10 rounded-full overflow-hidden' src={fotoProfil} alt="foto profil" />
          </figure>
          <div>
            <h1 className='font-sekunder text-lg font-medium'>{nama}</h1>
            <h2 className='text-sm text-[#797979] leading-none'>{type}</h2>
          </div>
        </div>
        <section className="flex justify-center gap-4">
          <div>
            <a href={pdf} target='_blank'>
              <Button bg="bg-blue-400" type="button" style="h-max w-36">
                <div className='flex justify-center gap-2 p-2'>
                  <FaFilePdf className="text-white" />
                  <p className="text-white leading-none">Lihat File</p>
                </div>
              </Button>
            </a>
          </div>
          <div>
            <a href={pdf} download className='w-max w-'>
              <Button bg="bg-green-400" type="button" style="h-max w-36">
                <div className='flex justify-center gap-2 p-2'>
                  <FaDownload className="text-white" />
                  <p className="text-white leading-none">Unduh File</p>
                </div>
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardPdf;
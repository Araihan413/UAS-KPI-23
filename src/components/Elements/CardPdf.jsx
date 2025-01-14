import Button from './Button'
import { FaFilePdf } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';

const CardPdf = (props) => {
  const { pdf, nama } = props;
  return (
    <>
      <div className="flex justify-start pb-5 gap-5 flex-col rounded-md font-sekunder bg-white shadow-full-light w-max">
        <article className=" rounded-md overflow-hidden w-max border-2">
          <iframe src={pdf} width="350px" height="228px" />
        </article>
        <div className='pl-3'>
          <h1 className='font-sekunder text-lg font-medium'>{nama}</h1>
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
                  <p className="text-white leading-none">Unduh Pdf</p>
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
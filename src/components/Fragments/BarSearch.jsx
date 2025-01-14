import { FaSearch } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import VideoContainer from './VideoContainer';
import AudioContainer from './AudioContainer';
import PdfContainer from './PdfContainer';
import dataVideo from '../../data/video.json'
import dataAudio from '../../data/audio.json'
import dataVisual from '../../data/visual.json'
const listDataVideo = dataVideo.data
const ListDataAudio = dataAudio.data
const listDataVisual = dataVisual.data
const BarSearch = (props) => {
  const { id, type = 'text', placeholder = 'masukkan pencarian...', video = false, audio = false, visual = false } = props;
  const [focus, setFocus] = useState(false);
  const [inputText, setInputText] = useState('');
  const [dataSearchVideo, setDataSearchVideo] = useState(listDataVideo)
  const [dataSearchAudio, setDataSearchAudio] = useState(ListDataAudio)
  const [dataSearchVisual, setDataSearchVisual] = useState(listDataVisual)

  const inputHandler = (event) => {
    event.preventDefault()
    const keySearch = event.target.value.toLowerCase();
    setInputText(keySearch);

    const filteredVideo = listDataVideo.filter((item) => {
      return item.nama.toLowerCase().includes(keySearch)
    })
    const filteredAudio = ListDataAudio.filter((item) => {
      return item.nama.toLowerCase().includes(keySearch)
    })
    const filteredVisual = listDataVisual.filter((item) => {
      return item.nama.toLowerCase().includes(keySearch)
    })

    if (inputText) {
      if (video) {
        setDataSearchVideo(filteredVideo)
      }
      if (audio) {
        setDataSearchAudio(filteredAudio)
      }
      if (visual) {
        setDataSearchVisual(filteredVisual)
      }
    } else {
      setDataSearchVideo(listDataVideo)
      setDataSearchAudio(ListDataAudio)
      setDataSearchVisual(listDataVisual)
    }
  };


  const ringFocus = useRef();
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  useEffect(() => {
    if (focus) {
      ringFocus.current.style.border = '1.5px solid #1EC1F9';
    } else {
      ringFocus.current.style.border = '1.5px solid #DBDEDE';
    }
  }, [focus]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div ref={ringFocus} className="rounded-2xl overflow-hidden lg:w-6/12 w-11/12 md:8/12 min-w-[300px] h-[46px] mt-10 mb-5">
          <form action="" className="flex w-full h-full" onSubmit={inputHandler}>
            <input onChange={inputHandler} onFocus={onFocus} onBlur={onBlur} type={type} id={id} name={id} placeholder={placeholder} className="p-3 outline-0 w-4/5 " />
            <button type="button" className="bg-blue-200 w-[20%] flex justify-center items-center">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className='flex flex-col w-full'>
          {video && (
            <div className="py-10">
              <VideoContainer dataVideo={dataSearchVideo} />
            </div>
          )}
          {visual && (
            <div className="py-10">
              <PdfContainer dataVisual={dataSearchVisual} />
            </div>
          )}
          {audio && (
            <div className="py-10">
              <AudioContainer dataAudio={dataSearchAudio} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BarSearch;

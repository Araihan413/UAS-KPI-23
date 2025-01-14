
const CardAudio = (props) => {
  const { src, nama } = props;
  return (
    <>
      <div className="w-max bg-slate-100 overflow-hidden rounded-lg shadow-full-light">
        <div className="p-2">
          <video width="320" height="" controls>
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <h1 className="font-semibold  bg-slate-200 text-center p-5">{nama}</h1>
      </div>
    </>
  );
};

export default CardAudio;
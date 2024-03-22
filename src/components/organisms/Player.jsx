import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { Print } from '../atoms/Print';



const Player = ({ paths }, ref) => {
  const [currentTrack, setTrackIndex] = useState(0)

  const playlist = paths.reduce((acc, it) => [...acc, ...it.files], []);


  const selectSong = (music) => {
    const index = playlist.map(e => e.src).indexOf(music)
    // console.log('click ', index)
    setTrackIndex(index);
  };

  const handleClickNext = () => {
    // currentTrack = currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    // console.log('click next')
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    // alert('AQUI');
    // currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    // console.log('currentTrack', currentTrack)
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  }


  return (
    <>


      {/* <span className='fixed bottom-1 left-20 text-center m-0'>{playlist[currentTrack].filename} - {playlist[currentTrack].filename}</span> */}
      <aside className="mt-8 mb-8 px-3 stycky right-5 flex flex-col gap-3">
        {/* <Print>{playlist}</Print> */}

        {/* <Print>{paths}</Print> */}
        {/* <Print>{files}</Print>  */}
        {paths.map((data) => (
          <section key={data.name} className="mt-3 first:mt-0 ">
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden ">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="bg-purple-500 dark:bg-gray-700">
                          <tr>
                            <th scope="col" className="py-2 px-2 text-xs font-bold tracking-wider text-left text-white uppercase dark:text-gray-400">
                              {data.name}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                          {data.files.map((item) => (
                            <tr key={item.src} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td className="cursor-pointer py-2 px-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" onClick={() => selectSong(item.src)} key={item.src} >
                                {item.filename}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </aside>
      <div className='fixed bottom-0 w-full bg-white'>

        <h3 className='text-center w-full font-extrabold text-black'>{playlist[currentTrack].filename}</h3>
        <AudioPlayer
          volume="0.5"
          src={playlist[currentTrack].src}
          showSkipControls
          autoPlayAfterSrcChange={true}
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          autoPlay={true}
        // loop={true}
        >
        </AudioPlayer>
      </div>
    </>
  )
};

export default Player;
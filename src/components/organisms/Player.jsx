import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';

const Player = ({ paths }) => {
  const [currentTrack, setTrackIndex] = useState(0);

  const playlist = paths.reduce((acc, it) => [...acc, ...it.files], []);

  const selectSong = (music) => {
    const index = playlist.map((e) => e.src).indexOf(music);
    setTrackIndex(index);
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0,
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0,
    );
  };

  return (
    <>
      <aside className="flex flex-col ">
        {paths.map((data) => (
          <section key={data.name} className="first:mt-0">
            <div className="max-w-xs mx-auto">
              <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="bg-purple-500 dark:bg-gray-700">
                          <tr>
                            <th scope="col" className="">
                              {data.name}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                          {data.files.map((item) => (
                            <tr
                              key={item.src}
                              className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <td
                                className="cursor-pointer py-2 px-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                onClick={() => selectSong(item.src)}
                              >
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
      <div className="fixed bottom-0 w-full bg-white">
        <h3 className="text-center w-full font-extrabold text-black">
          {playlist.length > 0 && playlist[currentTrack].filename}
        </h3>
        <AudioPlayer
          volume="0.5"
          src={playlist.length > 0 ? playlist[currentTrack].src : ''}
          showSkipControls
          autoPlayAfterSrcChange={true}
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          autoPlay={true}
        />
      </div>
    </>
  );
};

export default Player;

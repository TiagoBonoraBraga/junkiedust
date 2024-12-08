// import { lyricsData } from '@/mocks/lyrics';

function NewlineText(props: { text: string }) {
  const text = props.text;
  return text.split('\n').map((str) => (
    <p key={str} className="w-full text-purple-600">
      {str}
    </p>
  ));
}

export default function LyricCard() {
  return (
    <>
      {/* <div className="mt-20  px-3 flex flex-wrap justify-center items-center ss:flex ss:flex-col ss:px-0 gap-5">
        {lyricsData?.map((lyric, index) => (
          <section
            key={index}
            className="w-1/3 ring-2 ring-purple-500 rounded-md ss:w-80 mb-10"
          >
            <div className="bg-purple-500 text-white flex flex-row justify-center items-center">
              {lyric.title}
            </div>
            <div className=" items-center p-5 bg-white rounded-b-lg">
              <NewlineText text={lyric.lyric}></NewlineText>
            </div>
          </section>
        ))}
      </div> */}
    </>
  );
}

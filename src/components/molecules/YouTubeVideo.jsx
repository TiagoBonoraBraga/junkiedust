// components/YouTubeVideo.tsx

export default function YouTubeVideo({ string: videoId }) {
  return (
    <div className="relative pb-9/16 h-0 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

import "./Playlist.css";
import playlist from "../assets/playlist-cover.jpg";

const Playlist: React.FC = () => {
  return (
    <div className="content">
      <div className="title">
        <h1 style={{fontStyle: "italic"}}>IN THE</h1>
        <h1 style={{ fontSize: "150px" }}>20s</h1>
      </div>
      <h2>Cadou 1/4</h2>
      <p>
        Un playlist care are o combinație de piese care te fac să te simți
        badass, we balance it cu unele mai triste puțin și presărate sunt câteva
        melodii de care sunt obsedată eu acum și aș vrea să devii și tu la fel. 🤭
      </p>
      <div className="playlist-container">
        <img src={playlist} alt="Playlist Cover" />
        <a
          href="https://open.spotify.com/playlist/1DTMO2R1EnY7R8SskJHoBM?si=6fe2b4cb3bb54b5d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intră pe Spotify
        </a>
      </div>
    </div>
  );
};

export default Playlist;

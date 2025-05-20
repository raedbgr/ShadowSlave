// app/author/page.jsx
import "../../styles/globals.css";

export default function Author() {
  return (
    <div className="content-box">
      <h2>About author</h2>
      <div className="quote">
        <h6>“</h6>
        <p>Meet the Enigma Behind the Shadows</p>
        <h6>”</h6>
      </div>
      <p>
        Guiltythree, the creator of Shadow Slave, is a master of storytelling who has skillfully crafted a dark and
        immersive universe that has captivated readers worldwide...
      </p>
      <div className="space"></div>
      <h2>Interview with Guiltythree</h2>
      <div className="space"></div>
      <iframe
        width="600"
        height="338"
        src="https://www.youtube.com/embed/V1SEZX0342Q?start=1"
        title="Interview with Guiltythree"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="space"></div>
    </div>
  );
}
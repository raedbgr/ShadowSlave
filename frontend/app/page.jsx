// app/page.jsx
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="content-box">
      <h2>Welcome to the world of</h2>
      <h1>S h a d o w s l a w</h1>

      <div className="fading-line"></div>

      <p>
        Step into a realm where shadows hold secrets and survival is both an art and a curse. Shadow Slave is more than a novel—it’s an epic journey through a dystopian universe teeming with treacherous labyrinths, enigmatic powers, and characters who blur the line between hero and villain.
        <br /><br />
        Unfold the gripping tale of Sunny, a man cast into the Nightmare Dungeon, where every shadow conceals danger and every choice shapes his destiny. Bound by a mysterious curse and gifted with extraordinary abilities, Sunny must navigate a world where the rules of life and death are rewritten.
        <br /><br />
        Here, you’ll discover character insights, plot analyses, and exclusive content that delve into the intricate web of this story. Whether you’re a longtime fan or a newcomer drawn by whispers of darkness, this is your portal to the shadows.
      </p>

      <div className="space"></div>

      <h3>Characters</h3>
      <div className="images">
        <img src="/assets/sunny_illustration.png" alt="Sunny Illustration" />
        <img src="/assets/nephis_illustration.png" alt="Nephis Illustration" />
        <img src="/assets/cassie_illustration.png" alt="Cassie Illustration" />
      </div>

      <div className="space"></div>

      <h3>Into the Shadows</h3>
      <p>
        The Trial of the Nightmare Spell
        <br /><br />
        In one of the most gripping arcs, Sunny is thrust into the harrowing Nightmare treacherous realm where death lurks in every shadow and survival demands both cunning and raw strength. Here, Sunny encounters horrors that defy logic and enemies that challenge his will to live.
        <br /><br />
        Bound by a mysterious curse, he discovers his unique power: the ability to control shadows. This gift, however, is both a blessing and a curse, as it draws the attention of powerful foes and allies alike. Navigating a world where alliances are fragile and betrayal is common, Sunny must overcome labyrinthine puzzles, monstrous adversaries, and his own inner darkness to escape the Nightmare alive.
        <br /><br />
        This arc exemplifies Sunny's transformation from an ordinary man into a formidable warrior, showcasing his resourcefulness, resilience, and unyielding determination to carve his destiny in a world that seeks to break him.
      </p>

      <div className="space"></div>

      <img className="quote-img" src="/assets/sunny_weaving.png" alt="Sunny Weaving" />

      <div className="space"></div>

      <div className="quote">
        <h6>“</h6>
        <p>
          You know… when I just came here, I was ready to die. After all, in this whole world — two worlds, actually — there's not a single soul who cares whether I live or die. When I'm gone, no one will be sad. No one will even remember that I existed. But then I changed my mind. Somewhere along the way, I decided to survive. I must survive, no matter what...To spite you all.
        </p>
        <h6>”</h6>
      </div>
    </div>
  );
}
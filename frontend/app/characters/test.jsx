import "../../styles/characters.css";

async function getCharacters() {
  try {
    const res = await fetch("http://localhost:8000/api/characters/", {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch characters");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function Characters() {
  return (
    <div className="content-box">
      <h3>Characters</h3>
      <div className="space"></div>
      {characters.length === 0 ? (
        <p>No characters found.</p>
      ) : (
        <div className="ch-images">
          {characters.map((character) => (
            <div
              key={character.id}
              className="ch-box"
              data-name={`Name: ${character.name}`}
              data-true-name={`True Name: ${character.true_name}`}
              data-age={`Age: ${character.age}`}
              data-status={`Vital Status: ${character.vital_status}`}
              data-rank={`Rank: ${character.rank}`}
              data-class={`Class: ${character.class_name}`}
              data-aspect={`Aspect: ${character.aspect}`}
              data-flaw={`Flaw: ${character.flaw}`}
            >
              <img
                src={`/assets/${character.image}`}
                alt={character.name}
                onError={(e) => {
                  e.target.src = "/assets/placeholder.png";
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* TODO: Remove this */}
      {/* <div className="ch-images">
        <div
          className="ch-box"
          data-name="Name: Sunless"
          data-true-name="True Name: Lost From Light"
          data-age="Age: 26(current)"
          data-status="Vital Status: Alive"
          data-rank="Rank: Saint(Transcendent)"
          data-class="Class: Terror"
          data-aspect="Aspect Rank: Divine"
          data-flaw="Flaw: Clear Conscience"
        >
          <img src="/assets/sunny_illustration.png" alt="Sunless" />
        </div>
        <div
          className="ch-box"
          data-name="Name: Nephis"
          data-true-name="True Name: Changing Star"
          data-age="Age: 26(current)"
          data-status="Vital Status: Alive"
          data-rank="Rank: Saint(Transcendent)"
          data-class="Class: Titan"
          data-aspect="Aspect Rank: Divine"
          data-flaw="Flaw: Pristine Soul"
        >
          <img src="/assets/nephis_illustration.png" alt="Nephis" />
        </div>
        <div
          className="ch-box"
          data-name="Name: Cassia"
          data-true-name="True Name: Song of the Fallen"
          data-age="Age: 26(current)"
          data-status="Vital Status: Alive"
          data-rank="Rank: Saint(Transcendent)"
          data-class="Class: ――"
          data-aspect="Aspect Rank: Sacred"
          data-flaw="Flaw: Blindness"
        >
          <img src="/assets/cassie_illustration.png" alt="Cassia" />
        </div>
        <div
          className="ch-box"
          data-name="Name: Athena"
          data-true-name="True Name: Raised by Wolves"
          data-age="Age: 28(current)"
          data-status="Vital Status: Alive"
          data-rank="Rank: Saint(Transcendent)"
          data-class="Class: ――"
          data-aspect="Aspect Rank: Transcendent"
          data-flaw="Flaw: Glutton"
        >
          <img src="/assets/effie_illustration.png" alt="Athena" />
        </div>
        <div
          className="ch-box"
          data-name="Name: Jet"
          data-true-name="True Name: ――"
          data-age="Age: 35(current)"
          data-status="Vital Status: Active"
          data-rank="Rank: Saint(Transcendent)"
          data-class="Class: ――"
          data-aspect="Aspect Rank: Supreme"
          data-flaw="Flaw: You are dead"
        >
          <img src="/assets/jet_illustration.png" alt="Jet" />
        </div>
        <div
          className="ch-box"
          data-name="Name: Kai"
          data-true-name="True Name: Nightingale"
          data-age="Age: 28(current)"
          data-status="Vital Status: Alive"
          data-rank="Rank: Saint(Transcendent)"
          data-class="Class: ――"
          data-aspect="Aspect Rank: Ascended"
          data-flaw="Flaw: Lie Sense"
        >
          <img src="/assets/kai_illustration.png" alt="Kai" />
        </div>
        <div
          className="ch-box"
          data-name="Name: Mordret"
          data-true-name="True Name: ――"
          data-age="Age: 30(current)"
          data-status="Vital Status: Alive"
          data-rank="Rank: Saint(Transcendent)"
          data-class="Class: Titan"
          data-aspect="Aspect Rank: Divine"
          data-flaw="Flaw: ――"
        >
          <img src="/assets/mordret_illustration.png" alt="Mordret" />
        </div>
      </div> */}
    </div>
  );
}
// src/components/Hero.jsx

export default function Hero() {
  return (
    <>
      <h1>
        Coffee tracking for Coffee{' '}
        <abbr title="An enthusiast or devotee">Fiends</abbr>
      </h1>

      <div className="benefits-list">
        <h3>
          Try <span className="text-gradient">Coffee Tracker</span> and start…
        </h3>
        <p>☑️ tracking every coffee</p>
        <p>☑️ measuring your blood caffeine levels</p>
        <p>☑️ costing and quantifying your addiction</p>
      </div>

      <div className="info-card">
        <div>
          <i className="fa-solid fa-circle-info"></i>
          <h3>Did you know…</h3>
        </div>
        <h3>That caffeine’s half-life is about 5 hours</h3>
        <p>
          This means that after 5 hours, half the caffeine you consume is still
          in your system, keeping you alert longer! So if you drink a cup of
          coffee with 200 mg of caffeine, you’ll still have about 100 mg in
          your system after 5 hours.
        </p>
      </div>
    </>
  )
}

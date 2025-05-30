export default function Hero(){
  return(
    <>
    <h1>Coffee tracking for Coffee <abbr title="An enthusiast or devotee">Fiends</abbr></h1>

    <div className="benefits-list">
    <h3>
       Try <span className="text-gradient" >Coffee Tracker</span> and start...
    </h3> 
    <p>☑️tracking every coffee</p>
    <p>☑️measuring your blood caffeine levels</p>
    <p>☑️costing and quantifying your addition</p>
    </div>
    <div className="card info-card">
       <i className="fa-solid fa-circle-info"></i>
      <h3>Did you know...</h3>    
  
      <h5>That caffeine's half-life is about 5 hours</h5>
      <p>This means that after 5 hours, half the caffeine you consume is in your system, keeping you alert longer ! So if you drink a cup of coffee with 200mg of caffeine, you'll still have about a 100mg of caffeine in your system</p>
      </div>
    </>
  )
}
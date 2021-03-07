import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Navigation/Nav";
import { featuredGames, proGames } from "./games";
import CardComponent from "./components/CardComponent";

function App() {
 
  return (
    <div className="App">
      <Nav />
      <div>
        <div className="container">
          <div className='section-featured'>
            <div className='section-desc'>
            <h3>Featured games</h3>
            </div>
            <div className="game-wrapper">
              {featuredGames.map((game) => (
                <CardComponent key={game.id} item={game} />
              ))}
            </div>
          </div>
          {/*  */}
          <div className='section-featured'>
            <div className='section-desc'>
              <img src={logo} alt='logo'/>
              <div className='caption text-center'>Play games in all their glory for free with Stadia Pro</div>
                <p className='text-center'>Free games. More every month. Keep them as long as you’re a Stadia Pro member.1</p>
            </div>
            <div className="game-wrapper">
              {proGames.map((game, index) => (
                <CardComponent key={index} item={game} />
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default App;

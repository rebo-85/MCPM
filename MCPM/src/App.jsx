import Navigation from './mcpm/Navigation.jsx';

const tabs = [
  {
    route: "/home",
    label: "HOME"
  },
  {
    route: "/about-us",
    label: "ABOUT US"
  }
]
function App() {
  return(
    <header>
      <Navigation tabs={tabs}/>
    </header>
    
  )
}

export default App;

import './App.css'
import Header from './Components/Header'
import Terminal from './Components/Terminal'
import myImg from "./assets/me.png";
import { useHideHeaderOnSection } from './Hooks/HideHeaderOnTerminal';

function App() {
  const {showHeader, sectionRef: terminalRef} = useHideHeaderOnSection();

  return (
    <>
    {showHeader && (<Header  />)}

    {/* Terminal Section */}
    <section ref={terminalRef} className="relative min-h-screen font-mono">
      <Terminal  />
    </section>

    {/* Skills and Tools Section */}
    </>
  )
}

export default App

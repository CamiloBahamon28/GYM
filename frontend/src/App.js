// import './App.css';
import { Begin } from './components/Begin';
import { Slider } from './components/Slider';
import gym1 from "./images/image-1.jpg"
import gym2 from "./images/image-2.jpg"
import gym4 from "./images/image-4.jpg"
 

function App() {
  return (
    <div className="m-0 p-0 font-comfortaa box-border">
    <Begin imageSrc={gym4} />
    <Slider
      imageSrc={gym1}
      title={"Be an explorer."}
      subtitle={
        "Our platform offers a wide variety of unique travel locations!"
      }
    />
    <Slider
      imageSrc={gym2}
      title={"Memories for a lifetime."}
      subtitle={"Your dream vacation is only a few clicks away."}
      flipped={true}
    />
  </div>
  );
}

export default App;

import Basic from "./components/Basic";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Keyframes from "./components/Keyframes";
import ScrollRevel from "./components/ScrollRevel";
import StaggerAnimation from "./components/StaggerAnimation"; 
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";
import Variants from "./components/Varients";

function App() {
  return (
    <div className="space-y-2 p-5">
      <h1>Animation with Framer Motion</h1>
      <Basic/>
      <Keyframes/>
      <Button/>
      <TextMotion/>
      <TransitionType/>
      <Variants/>
      <Counter/>
      <ScrollRevel/>
      <StaggerAnimation/>
    </div>
  );
}

export default App;

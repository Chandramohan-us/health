import { useState } from "react";
import SplashScreen from "./SplashScreen";
import ChatUI from "./ChatUI";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <ChatUI />
  );
}

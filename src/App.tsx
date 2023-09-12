import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Main } from "./components/Main";
import "./App.css";
import Socials from "./components/Socials/Socials";

export const App = () => {
  return (
    <div className="app">
      <Logo />
      <main className="app-content">
        <Main />
        <h1>aa</h1>
      </main>
      <Footer />
      <Socials />
    </div>
  );
};

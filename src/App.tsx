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
      </main>
      <Footer />
      <Socials />
    </div>
  );
};

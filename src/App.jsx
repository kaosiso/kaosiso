import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClickEffect from "./utils/clickEffect";
import NotFound from "./pages/NotFound";
import GradientBackground from "./utils/GradientBackground";
import Contact from "./pages/Contact";
import WhiteShine from "./utils/WhiteShine";
import RouteProgress from "./components/RouteProgress"
import RandomTypedWords from "./components/RandomTypedWords";
import KaosisoCv from "./components/kaosisoCv";
// import Loading from "./components/Loading";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Loading/> */}
      <WhiteShine />
      <ClickEffect />
      <RouteProgress />
      <GradientBackground />

      <header className="sticky pb-5 top-0 z-50">
        <Header />
      </header>

      <main className="flex-grow pt-10 ">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kaosisoCv.jsx" element={<KaosisoCv />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="mt-auto mb-0">
        <Footer />
      </footer>
    </div>
  );
};

export default App;




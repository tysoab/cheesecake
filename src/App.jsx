import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Menu from "./components/Menu";
import Container from "./ui/Container";

export default function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Blog />
      <Contact />
      <Footer />
    </Container>
  );
}

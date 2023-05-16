import Navbar from "./Navbar/Navbar";
import Header from './Header/Header';
import Section2 from './Section2/Section2';
import Section3 from "./Section3/Section3"; 
import Section4 from './Section4/Section4';
import Footer from './Footer/Footer';

export default function Home() {
  return (
    <div className='bg-gray-900 w-screen h-screen'>
      <Navbar />
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  )
}


import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contract from "@/components/Contract";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
           <>
              <div className = 'container'>

                <Navbar />

                <About />

                <Project />

                <Contract />

                <Footer />  

              </div>
           </>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contract from "@/components/Contract";
import Project from "@/components/Project";


export default function Home() {
  return (
           <>
              <div className = 'container'>

                <Navbar />

                <Project />

                <Contract />

                <Footer />  

              </div>
           </>
  );
}

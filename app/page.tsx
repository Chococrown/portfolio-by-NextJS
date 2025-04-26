import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contract from "@/components/Contract";


export default function Home() {
  return (
           <>
              <div className = 'container'>

                <Navbar />

                

                <Contract />

                <Footer />  

              </div>
           </>
  );
}

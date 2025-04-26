import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
           <>
              <div className = 'container'>

                <Navbar />

                <h1>หน้าแรกของเว็บไซต์</h1>
                <h2>Hello World</h2>

                <Footer />  

              </div>
           </>
  );
}

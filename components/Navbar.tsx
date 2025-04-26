import Image from 'next/image';

export default function Navbar() {
    return (
             <nav>
  
                <div className="Header_Navbar">

                    <div className="header__Navbar__01">

                        <div>
                            <Image src = "/icons_Header/home.png"  width={30} height={30} alt="home"/>
                        </div>

                        <div>ประเสริฐ ตุ่นก่อ</div>

                    </div>

                        <ul className="Header__Navbar__Menu">
                            <li>ผลงาน</li>
                            <li>ติดต่อ</li>
                            
                        </ul>

                </div>

                <hr />
                <br />

             
             </nav>
    );
  }
  
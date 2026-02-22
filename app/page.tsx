import Link from "next/link";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    
    <div className="" style={{
      backgroundImage: "url('/images/background.avif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/*Navigation link to home page */}
      <div id="tabs" className="flex flex-row gap-4 p-4">
        {/* to home page */}
        <Link className="top-4 left-4" href="/">
        <img className="hover:scale-110 transition-transform duration-200" src="/images/cat_logo.png" alt="Main Icon" width={50} height={50}/>
        </Link>       
      </div>
      

      {/* Main content area */}
      <div className="flex min-h-screen min-w-screen justify-center items-center">
        <main className="flex-1 flex flex-col p-24">

          {/* Dashboard title */}
          <h1 className="text-2xl underline font-josefin-sans self-center backdrop-blur-xl">Dashboard</h1>


          {/* Content section with links */}
          <section className="backdrop-blur-md p-24 self-center rounded-lg">


            {/* Portfolio title and link */}
            <div className="flex flex-row hover:scale-110 transition-transform duration-200">
              <Link href="/portfolio" className=" group hover:underline flex items-center">
              <h2 className="flex flex-row text-lg self-left font-josefin-sans">Portfolio ---------------------------
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 ml-1 group-hover:scale-130 transition-transform duration-200"></FontAwesomeIcon>
              </h2>
              </Link>
              <a href="https://github.com/nilava1234/" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                  <FontAwesomeIcon icon={faGithub} className="w-3 h-3"></FontAwesomeIcon>
              </a>
              <a href="https://linkedin.com/in/nilava-saha/" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </div>

            {/* Additional title and link */}
            {/* <div className="flex flex-row hover:scale-110 transition-transform duration-200">
              <Link href="/" className=" group hover:underline flex items-center">
              <h2 className="flex flex-row text-lg self-left font-josefin-sans">Portfolio ---------------------------
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 ml-1 group-hover:scale-130 transition-transform duration-200"></FontAwesomeIcon>
              </h2>
              </Link>
            </div> */}
          </section>
        </main>
      </div>
    </div>
  );
}

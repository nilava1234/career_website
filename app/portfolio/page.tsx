import Link from "next/link";
import { faArrowUp, faE, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    
    <div className="" style={{
      backgroundImage: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(0, 117, 119, 0.61))",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/*Navigation link to home page */}
      <div id="tabs" className="fixed top-0 left-0 right-0 z-50 flex flex-row">
        <Link className="ml-4 flex items-center" href="/">
          <img className="hover:scale-110 transition-transform duration-200" src="/images/cat_logo.png" alt="Main Icon" width={50} height={50}/>
        </Link>
        <div className="flex-1 flex gap-4 justify-center items-center text-center font-space-grotesk text-lg backdrop-blur-md rounded-lg">
          <a href="#about-me">
            <h1 className="hover-text-shadow hover:scale-110 transition-transform duration-200">About Me</h1>
          </a>
          <span className="font-bold">•</span>
          <a href="#work-history">
            <h1 className="hover-text-shadow hover:scale-110 transition-transform duration-200">Work & Education</h1>
          </a>
          <span className="font-bold">•</span>
          <a href="#projects">
            <h1 className="hover-text-shadow hover:scale-110 transition-transform duration-200">Projects</h1>
          </a>
        </div>
      </div>
      

      {/* Main content area */}
      <div className="flex min-h-screen w-full font-space-grotesk justify-center pt-16">
        <main className="flex-1 flex flex-col p-24">

          {/* Content section */}
          <section className="self-center flex flex-col gap-10">
            {/* Dashboard title */}
            <section className="w-full max-w-xl self-center">
              <h1 id="about-me" className="text-2xl underline backdrop-blur-xl">About Me</h1>
              <section className="backdrop-blur-md rounded-lg self-center">
                {/* Portfolio title and link */}
                <div className="flex flex-row hover:scale-103 transition-transform duration-200 p-4">
                  <p className="flex flex-row text-lg self-left">
                    As of March 2025, I am a University of Texas alumnus. Graduated with a Bachelor of Science in Computer Science, I am currently seeking 
                    full-time software engineering opportunities. With experience in web development, cloud infrastructure, networking, and application development 
                    I am eager to apply my skills and knowledge to contribute to innovative projects and grow as a software engineer.
                    <br/><br/>
                    This page will showcase some of my projects and work experience, as well as provide links to my resume and contact information. 
                    Please feel free to reach out if you have any questions or would like to connect. Hopefully, I do a good enough job showcasing my flexible skill set 
                    and eagerness to learn and grow as a software engineer, that you to consider me for any open positions at your company.
                  </p>
                </div>
              </section>
            </section>


            <hr className="w-full max-w-xl self-center"></hr>


            <section className="flex flex-1 gap-30">
              
              <section className="backdrop-blur-md rounded-lg self-center">
                <section>
                <h1 id="work-history" className="text-2xl underline backdrop-blur-xl">Work</h1>
                <p className="text-sm">*Links attached to managers' profiles</p>
              </section>
                {/* Portfolio title and link */}
                <div className="flex flex-row w-full max-w-xl self-center p-1">
                  <ul className="flex flex-col text-lg self-left gap-4">
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">H-E-B</h1>
                        <span className="font-bold">•</span>
                        <h2 className="underline">Personal Shopper</h2>
                        <span className="font-bold">•</span>
                        <h3>(Sep 2025 - Present)</h3>
                        <a href="https://www.linkedin.com/in/michael-mccarty-232436233/" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                        After graduation, I started working at H-E-B as a personal shopper. This is a part-time job that allows me to work on my communication skills and customer service skills while also providing me with some income as I continue 
                        to search for full-time software engineering opportunities. With an opportunity to be cross-trained in multiple departments, I have been able to learn about 
                        my ability to adapt and learn new skills quickly. My effort and dedication to my work have been recognized by my managers and the company, as I have been given 
                        a <strong>performance-based raise</strong> within my first year of working there. I am thankful for the opportunity H-E-B has provided me as I continue to pursue my career goals in software engineering.
                      </p>
                    </li>
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <span className="flex font-bold items-center justify-center">•</span>
                        <h1 className="flex font-bold items-center justify-center">UTeach Outreach @ UT Austin CNS</h1>
                        <span className="flex font-bold items-center justify-center">•</span>
                        <h2 className="flex underline items-center justify-center">Assistant Teacher + Web Developer</h2>
                        <span className="flex font-bold items-center justify-center">•</span>
                        <h3 className="flex items-center justify-center">(Jun 2023 - Apr 2025)</h3>
                        <a href="https://www.linkedin.com/in/mary-conovan/" target="_blank" rel="noopener noreferrer" className=" flex items-center justify-center hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                        <a href="https://github.com/MKConovan/outreach_website" target="_blank" rel="noopener noreferrer" className=" flex items-center justify-center hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                      </section>
                      <p className="hover:scale-101 transition-transform duration-200 p-8">
                        UTeach Outreach is a program that helps future teachers earn teaching experience while they are still in school. During the summer, they would host a summer camp program for middle to high school students 
                        where they would experience advanced STEM topics such as, but not limited to, engineering, research & inquiry, math, chemistry, and also have an opportunity to enjoy fun summer activities. 
                        <br/><br/>
                        I initially joined the program as an <strong>Assistant Teacher</strong> for its summer camp, where I taught middle to high-school students about <strong>Python & Block Coding</strong>, circuitry, and engineering design.
                        During my time, I was tasked with creating fun and <strong>engaging lesson plans</strong> for the students and helping teach and mentor them during the camp. I also had the opportunity to lead a group of students 
                        in a project where they had to design, build, and program a machine that would help solve a real-world problem. It was rewarding to see the students learn and grow throughout the camp, and I was proud to be a part of their learning experience.
                        <br/><br/>
                        After my second summer with the program, I was <strong>scouted</strong> to continue working with them during the school year as an assistant teacher for the Program Coordinator for UTeach. In this role, I 
                        assisted in teaching and mentoring college students pursuing a career in education in electrical engineering and computer science topics, so they have an easier time teaching those subjects to the students 
                        of partnering elementary schools. I <strong>developed</strong> education videos going over in great detail on a low level on how each electrical component worked, wiring them together, and programming in functionality.
                        As an additional project, I also contributed to <strong>developing a logistical website</strong> for the program that helps reduce onsite confusion when the college students are teaching the elementary school students. 
                        The website provides a map of the schools with points of interest such as parking spots, front door entrances, office locations, and even videos showing how to access these points. The project was a success,
                        With me developing the website and another TA creating the video, we were able to <strong>reduce on-site confusion by 100%</strong> according to the program coordinator, allowing them a smoother and more efficient teaching experience.
                      </p>
                    </li>
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">Walmart</h1>
                        <span className="font-bold">•</span>
                        <h2 className="underline">Associate</h2>
                        <span className="font-bold">•</span>
                        <h3>(Jul 2021 - Sep 2023)</h3>
                        <a href="https://www.linkedin.com/in/adin-gutierrez/" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                        I worked at Walmart as an associate for a little over two years. This was my first job, and I am grateful for the experience it provided me. 
                        I learned how to work in a team, communicate effectively with customers and coworkers, and manage my time efficiently. 
                        <br/><br/>
                        My <strong>effort and skills were recognized</strong> by my managers enough to were they would often ask me to train new employees, and I was given the opportunity to substitute
                        for them when they were unavailable. Their trust in me was reputed by the store manager as I was offered a <strong>promotion to a department manager</strong>, which I 
                        declined as I wanted to focus on my studies and pursue a career in software engineering. 
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="backdrop-blur-md rounded-lg justify-center">
                <section>
                <h1 id="work-history" className="text-2xl underline backdrop-blur-xl">Education</h1>
              </section>
                {/* Portfolio title and link */}
                <div className="flex flex-row w-full max-w-xl self-center p-1">
                  <ul className="flex flex-col text-lg self-left gap-4">
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">University of Texas at Austin</h1>
                        <span className="font-bold">•</span>
                        <h2 className="underline">Computer Science</h2>
                        <span className="font-bold">•</span>
                        <h3>(Aug 2021 - March 2025)</h3>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                        I attended the University of Texas at Austin from August 2021 to March 2025, where I earned a Bachelor of Science in Computer Science. 
                        During my time at UT, I had the opportunity to take a variety of computer science courses that helped me develop a strong foundation in the field.
                        My most <strong>defining moments</strong> at UT were building and expanding an <strong>operating system</strong> within a semester-long course, <strong>researching graphical computation</strong> speeds
                        using <strong>OpenGL</strong> to identify possible bottlenecks or improvements by measuring computation time within each coding language and <strong>CPU architecture</strong>, and <strong>cloud 
                        development projects</strong> that I actively use in my personal projects and portfolio.
                        <br/><br/>
                        In addition to my primary projects, I also had opportunities to develop <strong>web applications</strong>, <strong>android applications</strong>, logical systems using <strong>Lisp</strong>, and expanding my 
                        <strong> network security knowledge</strong> by learning how to use tools such as Wireshark to pen tests and identify webpage, system, and application vulnerabilities.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

            </section>


             <hr className="w-full max-w-xl self-center"></hr>

            <section className="backdrop-blur-md rounded-lg self-center">
                <section>
                <h1 id="projects" className="text-2xl underline backdrop-blur-xl">Projects</h1>
                <p className="text-sm">*Links attached to project repositories</p>
              </section>
                {/* Portfolio title and link */}
                <div className="flex flex-row w-full max-w-xl self-center p-1">
                  <ul className="flex flex-col text-lg self-left gap-4">
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">Auxiliary Discord Assistant\Mokey</h1>
                        <a href="https://github.com/nilava1234/discord_bot_mokey" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                      </p>
                    </li>
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">Operating System Development\PintOS</h1>
                        <a href="https://github.com/nilava1234/PintOS_College" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                      </section>
                      <p className="hover:scale-101 transition-transform duration-200 p-8">
                      </p>
                    </li>
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">Next.js Website\Personal Portfolio</h1>
                        <a href="https://github.com/nilava1234/career_website" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                      </section>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                      </p>
                    </li>
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">AI Development\Defining using LoRA </h1>
                      </section>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                      </p>
                    </li>
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">Amazon EC3 Server\Homebrew SQL Database</h1>
                        <a href="https://github.com/nilava1234/SQL_Server" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                      </section>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                      </p>
                    </li>
                    <li className="">
                      <section className="flex flex-row gap-2">
                        <section className="flex flex-row gap-2">
                        <span className="font-bold">•</span>
                        <h1 className="font-bold">Android Studio\Music Player</h1>
                        <a href="https://github.com/nilava1234/android_music_player" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200 ml-1">
                          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                      </section>
                      </section>
                      <p className="hover:scale-103 transition-transform duration-200 p-8">
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="w-full max-w-xl self-center"></hr>

            <section className="flex flex-row backdrop-blur-md rounded-lg self-center">
              
              <img 
                src="/images/me_fixed.png" 
                alt="Profile Picture" 
                className="rounded-full w-32 h-32 object-cover"
              />
              <div className="flex flex-col justify-center ml-6">
                <h1 className="text-2xl font-bold">B.S.c Nilava Saha</h1>
                <p className="text-lg">Software Engineer</p>
                <div className="flex flex-row gap-4 mt-2">
                  <a href="https://www.linkedin.com/in/nilava-saha/" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                  </a>
                  <a href="https://github.com/nilava1234" target="_blank" rel="noopener noreferrer" className="hover:scale-145 transition-transform duration-200">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                  </a>
                  <a href="mailto:nilavasaha10@gmail.com" className="hover:scale-145 transition-transform duration-200">
                    <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                  </a>
                </div>
              </div>
              </section>
          </section>
          <a href="#" className="fixed bottom-4 right-4 bg-black/50 text-white p-3 rounded-full hover:scale-110 transition-transform duration-200">
            <FontAwesomeIcon icon={faArrowUp}/>
            Top
          </a>
        </main>
      </div>
    </div>
  );
}

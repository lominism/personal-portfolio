import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Javascript",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];
  const backendSkills = ["Node.js", "Express", "MySQL", "MongoDB"];

  return (
    <section
      id="about"
      className=" min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Hi, I'm Lom. I run a test-prep company in Bangkok called YPrep
            Academy. However, that doesn't take too much management so my day
            job is Chief Strategy Officer (CSO) of a tech company, also located
            here in Thailand. I have a background in programming when I used to
            use Stata and R for data analysis and research projects. I also have
            knowledge of Python. However, this past year, I decided I want to
            see if I can be better than the devs we have at the company so I
            made it a challenge to learn web and app development.
            <br></br>
            <br></br>
            My learning goals are as followed: <br></br>
            <br></br>
            For frontend, I will start with the web dev languages (HTML, CSS,
            Javascript) ➡️ {""} React {""}➡️ {""}Frontend Framework based on
            React (Next.js)
            <br></br>
            <br></br>
            Finally, from there, I will move on to backend developement with
            Node.js and Express ➡️ MySQL and MongoDB. Along the way, I will need
            to pick up classic CS concepts such as Design Patterns and Data
            Structure and Algorithms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul>
              <div className="mb-4">
                <li className="text-blue-300 space-y-2">
                  <strong>Yale University (2007)</strong>
                </li>
                <li className="text-tigerorange space-y-2 list-disc list-inside">
                  Bachelor of Arts in Chemistry (B.A.)
                </li>
                <li className="text-gray-300 space-y-2 italic text-xs">
                  Gates Millennium Scholar, California Governor's Scholar,
                  President of Thai Student Association, Editor of college humor
                  magazine "JE Temptations", Sigma Chi Magister
                </li>
              </div>
              <div className="mb-4">
                <li className="text-blue-300 space-y-2">
                  <strong>
                    UCSD School of Global Policy and Strategy (2011)
                  </strong>
                </li>
                <li className="text-tigerorange space-y-2 list-disc list-inside">
                  Master of International Affairs (MIA)
                </li>
                <li className="text-gray-300 space-y-2 italic text-xs">
                  President of the Student Body, Dean's Fellow, Marketing
                  Director of Journal of International Policy Solutions
                </li>
              </div>
              <div className="mb-4">
                <li className="text-blue-300 space-y-2">
                  <strong>Zhejiang University (2013)</strong>
                </li>
                <li className="text-tigerorange space-y-2 list-disc list-inside">
                  Master of China Studies (MCS)
                </li>
                <li className="text-gray-300 space-y-2 italic text-xs">
                  I didn't do much here. I got a scholarship to do a second
                  master's degree in China and pretty much chilled and enjoy the
                  culture. My mandarin improved quite a bit while there though.
                </li>
              </div>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              💼 Relevant Work Experience
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-bold text-blue-300">
                  Magic Box Solutions (2022-Present)
                </h4>
                <h5 className="italic text-tigerorange">
                  Chief Strategy Officer
                </h5>
                <p>
                  As the Chief Strategy Officer (CSO) of Magic Box Solutions, I
                  officially focus on business strategy and finanace. However, I
                  operate often as the COO and have done everything from
                  revamping the HR and Accounting departments to become more
                  efficient to ensuring that day-to-day operations run smoothly.
                </p>
                <br></br>
                <p>
                  In between, I trained the project managers, established the QA
                  team, and even advise the dev team and code myself when
                  needed.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">
                  Magic Box Solutions (2021-2022)
                </h4>
                <h5 className="italic text-tigerorange">Project Manager</h5>
                <p>
                  I originally started at the company as a PM, working on a data
                  analysis project to use ML to predict rice yield using
                  avaiable data such as weather, locations, rice type, etc.
                </p>
                <br></br>
                <p>
                  From there, I moved to managing teams that worked on more
                  complex projects while finding better methods for operational
                  efficiencies for interactions between the designers, PMs,
                  sales team, and devs. That pretty much led to my role as the
                  CSO.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              {" "}
              🎮 Activities & Interests{" "}
            </h3>
            <ul className="[&>*:nth-child(even)]:list-disc list-inside [&>*:nth-child(odd)]:text-blue-300 text-gray-300 space-y-2">
              <li>
                <strong>Gaming</strong>
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis, numquam?
              </li>
              <li>
                <strong>Basketball</strong>
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
                nam?
              </li>
              <li>
                <strong>Magic: The Gathering</strong>
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                excepturi.
              </li>
              <li>
                <strong>Electronics</strong>
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                excepturi.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              💼 Irrelevant Work Experience
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-bold text-blue-300">YPrep Academy</h4>
                <h5 className="italic text-tigerorange">
                  Co-Founder, Curriculum Director
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam sapiente nostrum molestiae dolor officia quae beatae
                  ad excepturi, vel hic sequi temporibus velit fugiat fuga, et
                  itaque laboriosam laudantium! Voluptatem!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">
                  The Princeton Review
                </h4>
                <h5 className="italic text-tigerorange">Marketing Manager</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam sapiente nostrum molestiae dolor officia quae beatae
                  ad excepturi, vel hic sequi temporibus velit fugiat fuga, et
                  itaque laboriosam laudantium! Voluptatem!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">Magic Dojo</h4>
                <h5 className="italic text-tigerorange">Card Shop Owner</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam sapiente nostrum molestiae dolor officia quae beatae
                  ad excepturi, vel hic sequi temporibus velit fugiat fuga, et
                  itaque laboriosam laudantium! Voluptatem!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">MMD Bar</h4>
                <h5 className="italic text-tigerorange">Bar Manager</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam sapiente nostrum molestiae dolor officia quae beatae
                  ad excepturi, vel hic sequi temporibus velit fugiat fuga, et
                  itaque laboriosam laudantium! Voluptatem!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">
                  United States Pacific Command (PACOM)
                </h4>
                <h5 className="italic text-tigerorange">Korea Analyst</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam sapiente nostrum molestiae dolor officia quae beatae
                  ad excepturi, vel hic sequi temporibus velit fugiat fuga, et
                  itaque laboriosam laudantium! Voluptatem!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">Wetzel's Pretzel</h4>
                <h5 className="italic text-tigerorange">Pretzel Flipper</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam sapiente nostrum molestiae dolor officia quae beatae
                  ad excepturi, vel hic sequi temporibus velit fugiat fuga, et
                  itaque laboriosam laudantium! Voluptatem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

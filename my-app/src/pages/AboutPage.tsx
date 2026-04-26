// ============================================================
// 🙋 ABOUT PAGE
// ============================================================
import React from "react";
// import { profile } from "../data/portfolioData";
// import { SocialIcon } from "../components/Icons";
// import { PageTitle, Reveal } from "../components/Layout";
import { Reveal } from "../components/Layout";

const AboutPage: React.FC = () => (
  <>
    {/* <PageTitle emoji="🙋" title="About Me" /> */}

    {/* Intro */}
    <Reveal delay={40}>
      <div className="pt-8 pb-8 border-b border-white/[0.06] space-y-6">
  
      {/* Header */}
      <div>
        <h2 className="font-display font-bold text-[22px] text-violet-400 font-semibold mb-2">
          🙋 About Me
        </h2>
        <p className="mt-2 leading-relaxed">
          Hiiii!, I’m Matthew Feri Tanutan I also go by Seventeen and this is my about me page where I share about myself a little bit. 
        </p>
        <br />
        <p>
          I am a Computer Science student with hands-on experience in full-stack web development and machine learning. 
          I specialize in building scalable backend systems using Django and FastAPI.
        </p>
        <br />
        <p>
          Also, I am expected to graduate in September and am actively seeking opportunities where I can contribute, learn, and grow as a software developer.
        </p>
      </div>

      {/* Interests */}
      <div>
        <h3 className="text-[22px] text-violet-400 font-semibold mb-2">
          🎨 Interests
        </h3>
        <ul className="space-y-2">
          <li>
            • Anime/Manga/Manhua
          </li>
          <li>
            • Video Games
          </li>
          <li>
            • Chess
          </li>
          <li>
            • Game Development
          </li>
          <li>
            • Computer Vision
          </li>
          <li>
            • Machine Learning
          </li>
          <li>
            • Web Development
          </li>
          <li>
            • Cyber Security
          </li>
          <li>
            • Pokemon 
          </li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-[22px] text-violet-400 font-semibold mb-2">
          🎓 Education
        </h3>
        <p>
          I’m currently a Computer Science student at the University of Southeastern Philippines in Obrero, Davao City, 
          where I’m taking up a major in Data Science and expecting to graduate in September 2026.
          <br /> 
          <br />
          Throughout my studies, I’ve worked on subjects like programming paradigms, computer networks, data science, 
          big data, and machine learning, which helped me build a strong technical foundation. I’ve also been recognized 
          as a Dean’s Lister.
          <br />
          <br />
          Before that, I studied at AMA Computer College of Davao for my senior highschool year, where I got my early exposure 
          to programming through Java, MySQL, and programming ethics. That experience really sparked my interest in tech and 
          pushed me to pursue computer science. I graduated with honors, and since then, I’ve been continuously building my 
          skills through projects and hands-on learning.
        </p>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-[22px] text-violet-400 font-semibold mb-2">
          🕒 Experience
        </h3>
        <ul className="space-y-7">
          <li>
            <p className="text-[17px] text-violet-400 font-semibold mb-2">
              • Software Developer Intern
              </p>
            <p className="text-[14px] text-white/50 mb-2">
              Southern Philippines Medical Center (SPMC) - Davao City, Philippines
              <br />
              July 2025 - August 2025
            </p>
            <p>
              During my internship at SPMC, I worked on enhancing the hospital’s payroll system. I was responsible for backend 
              development, including designing and building APIs, managing database structures, and ensuring smooth data flow 
              between the system components. 
              <br />
              <br />
              This experience strengthened my skills in backend architecture, API development, 
              and working within a real-world production environment.
            </p>
          </li>
          <li>
            <p className="text-[17px] text-violet-400 font-semibold mb-2">
              • AI Developer Lead
              </p>
            <p className="text-[14px] text-white/50  mb-2">
              United Nation Development Programme (UNDP) - Davao City, Philippines
              <br />
              March 2025 - June 2025
            </p>
            <p>
              As the AI Developer Lead for the UNDP project, I worked on analyzing satellite data and building a prediction 
              pipeline for marine trash movement. I led a small team where I trained members on dataset annotation and ensured 
              data quality. I also handled the training, evaluation, and validation of a YOLO-based model used in the project. 
              <br />
              <br />
              This role helped me develop both my technical expertise in machine learning and my leadership skills in managing 
              a team.
            </p>
          </li>
          <li>
            <p className="text-[17px] text-violet-400 font-semibold mb-2">
              • Freelance Developer / Data Assistant
            </p>
            <p className="text-[14px] text-white/50  mb-2">
              Remote / Project-Based
              <br />
              2024 – Present
            </p>
            <p>
              Worked on short-term freelance projects for various clients, focusing on frontend fixes, automation, and data-related tasks. 
              Contributions included resolving UI and CSS issues, building simple AI workflow automations, performing data encoding and cleaning, 
              and conducting product research. These projects helped me develop adaptability and the ability to 
              quickly deliver solutions in fast-paced, real-world scenarios.
            </p>
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-[22px] text-violet-400 font-semibold mb-2">
          🧠 Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Python", "React", "Django", "Machine Learning", "TypeScript", "FastAPI", "PostgreSQL", 
          "SQL", "MariaDB", "Git", "Flask", "Docker", "R", "PyTorch", "Tableau", "PowerBI", "Linux",
          "PHP", "Java", "JavaScript"
          ].map(skill => (
            <span
              key={skill}
              className="px-2.5 py-1 text-[12px] rounded-full bg-white/[0.05] text-white/50 border border-white/[0.07]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-[22px] text-violet-400 font-semibold mb-2 mt-12">
          📞 Contact me Through My Links
        </h3>
        <ul className="space-y-2">
          <li>
            • LinkedIn:{" "}
            <a
              className="text-violet-400 underline hover:text-violet-300"
              href="https://www.linkedin.com/in/matthew-feri-tanutan-2676332a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              matthew-feri-tanutan
            </a>
          </li>

          <li>
            • GitHub:{" "}
            <a
              className="text-violet-400 underline hover:text-violet-300"
              href="https://github.com/Seventeen23"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Seventeen23
            </a>
          </li>

          <li>
            • Email:{" "}
            <a
              className="text-violet-400 underline hover:text-violet-300"
              href="mailto:matthewtanutan17@gmail.com"
            >
              matthewtanutan17@gmail.com
            </a>
          </li>
          <li>
            • X:{" "}
            <a
              className="text-violet-400 underline hover:text-violet-300"
              href="https://x.com/MatthewTanutan"
              target="_blank"
              rel="noopener noreferrer"
            >
              @MatthewTanutan
            </a>
          </li>
        </ul>
      </div>

    </div>
    </Reveal>
  </>
);

export default AboutPage;
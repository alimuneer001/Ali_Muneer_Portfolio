import { SKILLS } from "../public/scripts/profile-data";
export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 border-t border-neutral-200"
    >
      <p className="text-xs tracking-widest text-neutral-500 mb-5">
        {"THE TOOLKIT"}
      </p>
      <h2 className="text-3xl md:text-5xl font-black uppercase mb-9">
        {"BUILT ACROSS THE STACK."}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(SKILLS).map(([category, skills]) => <div key={category}>
          <h3 className="font-bold mb-4">{category}</h3>
          <div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="px-4 py-2 border border-neutral-300 rounded-full text-xs font-semibold">{skill}</span>)}</div>
        </div>)}
      </div>
      <p className="text-sm text-neutral-500 mt-6">Current role also includes Python, PostgreSQL and OpenAI API integration.</p>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div>
          <h3 className="font-black text-xl uppercase mb-6">{"Education"}</h3>
          <p className="font-bold">{"BS Computer Science"}</p>
          <p className="text-sm text-neutral-500 mt-2">
            {"The University of Lahore · Jan 2019 – Dec 2023"}
          </p>
          <p className="font-bold mt-6">{"FSc Pre-Engineering"}</p>
          <p className="text-sm text-neutral-500 mt-2">
            {"Punjab Group of College, Okara · Jan 2016 – Dec 2018"}
          </p>
        </div>
        <div>
          <h3 className="font-black text-xl uppercase mb-6">{"Credentials"}</h3>
          <a
            href="https://academy.claude.com/verify/0139e7dbcb69278fa879c94a0bd50375"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 border-b border-neutral-200 text-sm font-medium"
          >
            {"Building with the Claude API ↗"}
          </a>
          <a
            href="https://academy.claude.com/verify/71a2599e4ae347b7da8cc9c051faadda"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 border-b border-neutral-200 text-sm font-medium"
          >
            {"Claude 101 ↗"}
          </a>
          <a
            href="https://ali-muneer-portfolio.vercel.app/certifications/cinnova-experience.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 border-b border-neutral-200 text-sm font-medium"
          >
            {"Cinnova experience letter ↗"}
          </a>
          <a
            href="https://ali-muneer-portfolio.vercel.app/certifications/cinnova-internship.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 border-b border-neutral-200 text-sm font-medium"
          >
            {"Cinnova internship letter ↗"}
          </a>
        </div>
      </div>
    </section>
  );
}

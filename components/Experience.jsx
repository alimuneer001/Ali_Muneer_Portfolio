import { EXPERIENCE } from "../public/scripts/profile-data";

export default function Experience() {
  return <section id="experience" className="relative w-full bg-[#070709] text-white overflow-visible" style={{ height: "460vh" }}>
    <div id="exp-sticky-viewport" className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#070709] flex flex-col justify-between">
      <header className="relative z-30 px-6 md:px-14 py-6 flex items-center justify-between border-b border-white/10">
        <span id="exp-hud-phase" className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Career journey</span>
        <div className="w-24 h-0.5 bg-white/10"><div id="exp-hud-progress" className="h-full bg-white w-0" /></div>
      </header>
      <div className="relative flex-1 w-full overflow-hidden flex items-center">
        <div id="exp-horizontal-stage" className="flex items-center h-full" style={{ width: "500vw" }}>
          <div className="exp-panel flex-shrink-0 w-screen px-8 md:px-16 lg:px-24" data-phase="Foundation & journey">
            <p className="text-xs tracking-widest uppercase mb-6 text-neutral-400">Foundation & journey</p>
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-none mb-8">Where<br />I've been</h2>
            <p className="text-neutral-300 max-w-xl">From frontend development at Cinnova Technologies to MERN applications at Spadasoft and full-stack engineering at Blink Hint.</p>
          </div>
          {EXPERIENCE.map((job, index) => <article key={job.title + job.dates} data-phase={job.company} className="exp-panel relative flex-shrink-0 w-screen px-8 md:px-16 lg:px-24">
            <div className="relative max-w-4xl">
              <p className="text-xs tracking-widest text-neutral-400 mb-4 uppercase">{job.dates} / {job.company}</p>
              <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-5">{job.title}</h3>
              {job.arrangement && <p className="text-sm text-neutral-400 mb-4">{job.arrangement}</p>}
              <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-neutral-300 max-w-3xl">{job.points.map(point => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </div>
      <footer className="px-6 md:px-14 py-4 border-t border-white/10 flex flex-wrap gap-3">
        {EXPERIENCE.map((job,index) => <button key={job.dates} type="button" data-target-progress={(index+1)/EXPERIENCE.length} className="exp-jump-btn text-xs font-bold uppercase px-3 py-2 rounded-md border border-white/20 text-neutral-400">{index === 0 ? 'Internship' : job.company}</button>)}
      </footer>
    </div>
  </section>;
}

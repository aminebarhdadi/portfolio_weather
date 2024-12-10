import Image from "next/image";

const skills = [
  { name: 'React', icon: 'icon-[akar-icons--react-fill] text-blue-400' },
  { name: 'NextJS', icon: 'icon-[akar-icons--nextjs-fill] text-black' },
  { name: 'Javascript', icon: 'icon-[akar-icons--javascript-fill] text-yellow-400' },
  { name: 'Hubspot', icon: 'icon-[simple-icons--hubspot] text-orange-400' },
  { name: 'HTML', icon: 'icon-[akar-icons--html-fill] text-orange-800' },
  { name: 'CSS', icon: 'icon-[akar-icons--css-fill] text-yellow-600' },
  { name: 'MySQL', icon: 'icon-[akar-icons--data] text-blue-800' },
  { name: 'Wordpress', icon: 'icon-[jam--wordpress] text-blue-500' },
];

const projects = [
  {
    id: 1,
    title: 'ARKU',
    image: '/img/arku.png',
  },
  {
    id: 2,
    title: 'GAPTEQ',
    image: '/img/gapteq.png',
  },
  {
    id: 3,
    title: 'Die Krone',
    image: '/img/krone.png',
  },
  {
    id: 4,
    title: 'Peak Avenue',
    image: '/img/peakavenue.png',
  },
  {
    id: 5,
    title: 'Rommelag',
    image: '/img/rommelag.png',
  },
  {
    id: 6,
    title: 'WIFO',
    image: '/img/wifo.png',
  },  
];

export default function Home() {
  return (

    <div id="hero" className="grid grid-rows-[1fr] mx-auto p-2 sm:p-4 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className=" container flex flex-col-reverse gap-15 md:flex-row items-center justify-between  mx-auto p-6 py-20">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl leading-17 font-bold text-gray-800">
          Willkommen zu meinem Webentwicklungs&shy;portfolio!
          </h1>
          <p className="text-lg text-gray-600">
          Ich bin Amine Barhdadi, ein leidenschaftlicher Webentwickler mit Sitz in Deutschland. Hier erhalten Sie einen Einblick in meine Reise in der Welt der Webentwicklung, wo Kreativität auf Funktionalität trifft.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="docs/Lebenslauf.pdf" className="btn btn-soft btn-primary">
              Lebenslauf herunterladen
            </a>
            <a href="#contact" className="btn btn-outline btn-secondary">
              Kontakt
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
        <Image 
              className="md:w-2/3"
              src='/img/hero-img.jpg'
              width={1000}
              height={1000}
              alt="Logo"
              />
        </div>
      </section>
    
      <section id="skills" className="w-full py-20 flex flex-col-reverse md:flex-row bg-slate-200 rounded-lg items-center justify-between  mx-auto p-6">
        <div className="  container mx-auto  ">
          <h2 className="text-5xl text-center font-bold text-gray-800 mb-6"><div className="font-light text-xl mb-4">Meine Fähigkeiten</div> What I do</h2>
          <p className="text-lg text-center text-gray-600 mb-10">
            Hier sind einige der Programmiersprachen <br/>und Technologien, mit denen ich arbeite:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
            
                <div key={index} className="card ">
                  <div className="card-body  p-3 md:p-4">
                    <div className={`mb-4 ${skill.icon} size-15`}></div>
                    <h5 className="card-title mb-2.5 text-sm md:text-base">{skill.name}</h5>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-20">
      <div className=" container mx-auto px-6 ">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Projekte</h2>
        <p className="text-lg text-gray-600 mb-10">
          Hier sind einige der Projekte, an denen ich gearbeitet habe:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card hover:scale-105 transition  duration-150 ease-out">
              <figure className=" aspect-[5/3]">
                <img className="w-full h-full object-cover" src={project.image} alt={project.title} width={800} height={800}/>
              </figure>
              <div className="card-body">
                <h5 className="card-title mb-2.5">{project.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="w-full py-20 mb-[5rem] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-slate-900	 rounded-lg" style={{ backgroundImage: "url('/img/bg-contact.jpg')" }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Nehmen Sie Kontakt auf</h2>
        <p className="text-lg text-white mb-8 max-w-lg mx-auto">
          Ich würde mich freuen, von Ihnen zu hören! Egal, ob Sie eine Frage haben oder einfach nur Hallo sagen möchten, zögern Sie nicht, sich zu melden.
        </p>
        <a
          href="mailto:barhdadi.aminee@gmail.com"
          className="btn hover:text-white hover:border-white text-slate-900 bg-white hover:bg-transparent transition duration-75"
        >
          Eine E-Mail senden
        </a>
      </div>
    </section>
      </main>
    </div>
  );
}

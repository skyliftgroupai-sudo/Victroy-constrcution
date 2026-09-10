import { FiMapPin } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHero from '../components/sections/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CtaBanner from '../components/sections/CtaBanner'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects"
        path="/projects"
        description="A look at recent Victory Construction Services projects across Northeast Florida — custom homes, additions, remodels, and outdoor living, labeled by location."
      />

      <PageHero
        eyebrow="Our Work"
        title="Built With Care Across Northeast Florida"
        intro="Every project reflects planning, coordination, and accountability from start to finish. Here is a look at recent work, labeled by where it was completed."
        image="/images/kitchen.jpg"
        ctas={false}
      />

      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Planning and craftsmanship you can see"
            intro="Our photo library is growing as we complete more work. Each project below is tagged with its area."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.location + index} delay={(index % 3) * 0.08}>
                <div className="group relative overflow-hidden rounded-[1.75rem] shadow-card">
                  <img
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                    <p className="font-serif text-xl">{project.title}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-cream/90">
                      <FiMapPin className="h-4 w-4" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to see your project on this page?"
        intro="Tell us what you are planning. VCS will review your details and help determine the right next step."
      />
    </>
  )
}

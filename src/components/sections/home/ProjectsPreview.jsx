import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import SectionHeading from '../../ui/SectionHeading'
import Reveal from '../../ui/Reveal'
import Button from '../../ui/Button'
import { projects } from '../../../data/projects'

export default function ProjectsPreview() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Work"
          title="Built with care across your neighborhood"
          intro="A look at recent projects, labeled by where they were completed here in Northeast Florida."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <Reveal key={project.location + index} delay={(index % 3) * 0.1}>
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

        <div className="mt-12 text-center">
          <Button to="/projects" variant="outline">
            View All Projects
            <FiArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

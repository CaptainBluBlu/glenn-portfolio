import PageTitle from '@/components/ui/PageTitle'
import Section from '@/components/ui/Section'
import ProjectCard from '@/components/ProjectCard'
import { MOCK_PROJECTS } from '@/lib/sanity'

const ProjectsPage = () => {
  return (
    <main>
      <Section>
        <PageTitle>Projects</PageTitle>
        <p className="text-lg text-zinc-700 dark:text-stone-300 max-w-3xl mb-12">
          A collection of my work, from professional contracts to personal experiments. Data for these projects would be managed in Sanity.io.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </main>
  )
}

export default ProjectsPage

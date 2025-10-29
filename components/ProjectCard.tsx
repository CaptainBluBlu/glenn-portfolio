import { Github, Feather, ExternalLink } from 'lucide-react'
import Card from './ui/Card'

interface Project {
  title: string
  description: string
  imageUrl: string
  githubUrl?: string
  blogUrl?: string | null
  liveUrl?: string | null
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Card>
    <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-stone-100 mb-2">{project.title}</h3>
      <p className="text-zinc-700 dark:text-stone-300 mb-4">{project.description}</p>
    </div>
    <div className="flex items-center justify-end gap-2 p-4 bg-stone-100 dark:bg-zinc-700/50 border-t-2 border-zinc-900 dark:border-stone-500">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-600 dark:text-stone-300 hover:text-zinc-900 dark:hover:text-white" aria-label="GitHub">
          <Github className="w-6 h-6" />
        </a>
      )}
      {project.blogUrl && (
        <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-600 dark:text-stone-300 hover:text-zinc-900 dark:hover:text-white" aria-label="Blog post">
          <Feather className="w-6 h-6" />
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-600 dark:text-stone-300 hover:text-zinc-900 dark:hover:text-white" aria-label="Live demo">
          <ExternalLink className="w-6 h-6" />
        </a>
      )}
    </div>
  </Card>
)

export default ProjectCard

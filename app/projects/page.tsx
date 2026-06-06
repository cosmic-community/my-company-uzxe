import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'

export const revalidate = 60

export const metadata = {
  title: 'Projects | Developer Portfolio',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-semibold mb-2">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-gray-500 text-lg">
            A collection of projects I've built, ranging from web apps to open-source tools.
          </p>
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-500">No projects available yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
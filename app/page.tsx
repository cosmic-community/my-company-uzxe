import Link from 'next/link'
import { getProfile, getProjects, getSkills } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'

export const revalidate = 60

export default async function HomePage() {
  const [profile, projects, skills] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
  ])

  const featuredProjects = projects.filter((p) => p.metadata?.featured)
  const displayProjects = (featuredProjects.length > 0 ? featuredProjects : projects).slice(0, 3)
  const displaySkills = skills.slice(0, 8)

  return (
    <>
      <Hero profile={profile} />

      {displayProjects.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-primary font-semibold mb-2">Portfolio</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Projects</h2>
              </div>
              <Link href="/projects" className="text-primary font-medium hover:underline hidden sm:block">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {displaySkills.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-primary font-semibold mb-2">Expertise</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Skills & Tools</h2>
              </div>
              <Link href="/skills" className="text-primary font-medium hover:underline hidden sm:block">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {displaySkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-tr from-primary to-accent rounded-3xl p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's work together</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
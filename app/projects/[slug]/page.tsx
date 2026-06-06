// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const title = getMetafieldValue(project.metadata?.title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const image = project.metadata?.featured_image
  const gallery = project.metadata?.gallery || []
  const techStack = project.metadata?.tech_stack || []
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <Link href="/projects" className="inline-flex items-center text-primary font-medium hover:underline mb-8">
          ← Back to projects
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{title}</h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
            >
              Live Demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-medium rounded-lg transition-colors"
            >
              View Code
            </a>
          )}
        </div>

        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="w-full rounded-2xl shadow-lg mb-10"
          />
        )}

        {techStack.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-surface text-gray-700 text-sm font-medium rounded-lg">
                  {getMetafieldValue(tech)}
                </span>
              ))}
            </div>
          </div>
        )}

        {description && (
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{description}</p>
          </div>
        )}

        {gallery.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={`${img.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={`${title} screenshot ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full rounded-xl shadow-md"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
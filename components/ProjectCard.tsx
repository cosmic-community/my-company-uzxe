import Link from 'next/link'
import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProjectCard({ project }: { project: Project }) {
  const title = getMetafieldValue(project.metadata?.title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const image = project.metadata?.featured_image
  const techStack = project.metadata?.tech_stack || []
  const featured = project.metadata?.featured

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      {image && (
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <span className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
        )}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-surface text-gray-600 text-xs font-medium rounded-md"
              >
                {getMetafieldValue(tech)}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
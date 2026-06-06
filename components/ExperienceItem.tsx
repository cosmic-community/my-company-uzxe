import type { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function formatDate(date?: string): string {
  if (!date) return ''
  const d = new Date(date)
  if (isNaN(d.getTime())) return getMetafieldValue(date)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function ExperienceItem({ item }: { item: WorkExperience }) {
  const company = getMetafieldValue(item.metadata?.company) || item.title
  const role = getMetafieldValue(item.metadata?.role)
  const logo = item.metadata?.company_logo
  const start = formatDate(item.metadata?.start_date)
  const current = item.metadata?.current_role
  const end = current ? 'Present' : formatDate(item.metadata?.end_date)
  const description = getMetafieldValue(item.metadata?.description)

  return (
    <div className="relative pl-8 pb-10 border-l-2 border-gray-100 last:border-l-transparent last:pb-0">
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-white" />
      <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          {logo && (
            <img
              src={`${logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={company}
              width={56}
              height={56}
              className="w-14 h-14 object-contain rounded-lg bg-surface p-1 flex-shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900">{role || company}</h3>
              {(start || end) && (
                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                  {start} {start && end && '—'} {end}
                </span>
              )}
            </div>
            {role && <p className="text-primary font-medium mb-3">{company}</p>}
            {description && (
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
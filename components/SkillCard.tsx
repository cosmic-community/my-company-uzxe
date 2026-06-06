import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillCard({ skill }: { skill: Skill }) {
  const name = getMetafieldValue(skill.metadata?.name) || skill.title
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const icon = skill.metadata?.icon

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
      {icon ? (
        <img
          src={`${icon.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
        />
      ) : (
        <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
        </div>
      )}
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 truncate">{name}</p>
        {proficiency && (
          <p className="text-sm text-gray-500">{proficiency}</p>
        )}
      </div>
    </div>
  )
}
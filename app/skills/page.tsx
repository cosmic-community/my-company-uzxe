import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'
import type { Skill } from '@/types'

export const revalidate = 60

export const metadata = {
  title: 'Skills | Developer Portfolio',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  // Group skills by category
  const grouped: Record<string, Skill[]> = {}
  for (const skill of skills) {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(skill)
  }

  const categories = Object.keys(grouped)

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-semibold mb-2">Expertise</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Skills & Tools</h1>
          <p className="text-gray-500 text-lg">
            Technologies and tools I work with to build great products.
          </p>
        </div>

        {skills.length === 0 ? (
          <p className="text-gray-500">No skills available yet.</p>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = grouped[category]
              if (!categorySkills || categorySkills.length === 0) {
                return null
              }
              return (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categorySkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
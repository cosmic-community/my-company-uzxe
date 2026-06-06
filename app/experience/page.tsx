import { getWorkExperience } from '@/lib/cosmic'
import ExperienceItem from '@/components/ExperienceItem'

export const revalidate = 60

export const metadata = {
  title: 'Experience | Developer Portfolio',
}

export default async function ExperiencePage() {
  const experience = await getWorkExperience()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="mb-12">
          <p className="text-primary font-semibold mb-2">Career</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Work Experience</h1>
          <p className="text-gray-500 text-lg">
            My professional journey and the companies I've worked with.
          </p>
        </div>

        {experience.length === 0 ? (
          <p className="text-gray-500">No work experience available yet.</p>
        ) : (
          <div>
            {experience.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
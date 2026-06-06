import { getProfile, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'Contact | Developer Portfolio',
}

const socialIcons: Record<string, { label: string }> = {
  github: { label: 'GitHub' },
  linkedin: { label: 'LinkedIn' },
  twitter: { label: 'Twitter' },
  website: { label: 'Website' },
}

export default async function ContactPage() {
  const profile = await getProfile()

  const email = getMetafieldValue(profile?.metadata?.email)
  const location = getMetafieldValue(profile?.metadata?.location)
  const fullName = getMetafieldValue(profile?.metadata?.full_name)
  const social = profile?.metadata?.social_links || {}

  const socialEntries = Object.entries(social).filter(
    ([, value]) => typeof value === 'string' && value.length > 0
  ) as [string, string][]

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
          {fullName && (
            <p className="text-center text-gray-600 mb-8">
              Reach out to <span className="font-semibold text-gray-900">{fullName}</span>
            </p>
          )}

          <div className="space-y-6 max-w-md mx-auto">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{email}</p>
                </div>
              </a>
            )}

            {location && (
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{location}</p>
                </div>
              </div>
            )}
          </div>

          {socialEntries.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex flex-wrap justify-center gap-3">
                {socialEntries.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-surface hover:bg-primary hover:text-white text-gray-700 font-medium rounded-lg transition-colors capitalize"
                  >
                    {socialIcons[key]?.label || key}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
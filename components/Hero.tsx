import Link from 'next/link'
import type { Profile } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function Hero({ profile }: { profile: Profile | null }) {
  const fullName = getMetafieldValue(profile?.metadata?.full_name) || 'Welcome'
  const title = getMetafieldValue(profile?.metadata?.title) || 'Developer'
  const bio = getMetafieldValue(profile?.metadata?.bio)
  const location = getMetafieldValue(profile?.metadata?.location)
  const headshot = profile?.metadata?.headshot

  return (
    <section className="section-padding bg-gradient-to-b from-surface to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-primary font-semibold mb-3">Hi there 👋, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              {fullName}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-6">{title}</p>
            {bio && (
              <p className="text-gray-500 text-lg leading-relaxed mb-6 max-w-xl">{bio}</p>
            )}
            {location && (
              <p className="flex items-center gap-2 text-gray-500 mb-8">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-medium rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {headshot && (
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-20 scale-105" />
                <img
                  src={`${headshot.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt={fullName}
                  width={400}
                  height={400}
                  className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
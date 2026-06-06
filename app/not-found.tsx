import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-custom text-center py-20">
        <p className="text-6xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
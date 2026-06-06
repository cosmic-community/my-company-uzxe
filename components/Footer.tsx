export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-100 bg-surface">
      <div className="container-custom py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {year} Developer Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with Next.js & Cosmic
          </p>
        </div>
      </div>
    </footer>
  )
}
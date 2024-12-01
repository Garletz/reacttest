import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Whoup</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="#features" className="hover:underline">Features</Link></li>
            <li><Link href="#download" className="hover:underline">Download</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


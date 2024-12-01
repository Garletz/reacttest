import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-6">Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input type="text" id="name" name="name" required className="mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" id="email" name="email" required className="mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea id="message" name="message" rows={4} required className="mt-1 block w-full" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-2">
            <p><strong>Email:</strong> support@whoup.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 App Street, San Francisco, CA 94105</p>
          </div>
        </div>
      </div>
    </div>
  )
}


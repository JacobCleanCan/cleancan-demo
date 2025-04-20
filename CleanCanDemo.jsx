import { Button } from "@/components/ui/button";

export default function CleanCanDemo() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">CleanCan®</h1>
        <p className="text-lg mb-6">Your on-demand garbage can cleaning service</p>
        <Button className="text-lg px-6 py-3">Book a Cleaning</Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why CleanCan?</h2>
        <p>
          We help homeowners keep their garbage cans fresh, clean, and germ-free.
          No more nasty smells or bacteria build-up. We work like DoorDash — just book it and forget it.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-2">Fast Scheduling</h3>
          <p>Book a cleaner in seconds using our app or website.</p>
        </div>
        <div className="rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-2">Sanitized Clean</h3>
          <p>We use pressure washers and eco-safe cleaners to kill bacteria.</p>
        </div>
        <div className="rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-2">Flexible Plans</h3>
          <p>One-time cleans or recurring — whatever works for you.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-4xl mb-2">📱</div>
            <p>1. Book on the App</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🚛</div>
            <p>2. We Come to You</p>
          </div>
          <div>
            <div className="text-4xl mb-2">✨</div>
            <p>3. Enjoy Fresh Cans</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 px-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <form className="grid gap-4">
          <input
            className="p-3 rounded border border-gray-300"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="p-3 rounded border border-gray-300"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="p-3 rounded border border-gray-300"
            rows="4"
            placeholder="Your Message"
          />
          <Button className="w-full">Send Message</Button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} CleanCan®. All rights reserved.
      </footer>
    </main>
  );
}
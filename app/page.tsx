import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Layout, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center px-4 lg:px-6 border-b bg-background/80 backdrop-blur-sm">
        <Link className="flex items-center justify-center gap-2" href="#">
          <div className="rounded-lg bg-gradient-to-br from-primary to-blue-600 p-1.5">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">TaskMaster</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 hover:underline" href="/login">
            Sign In
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 hover:underline" href="/signup">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10" />
          <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Manage your tasks with ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A simple, powerful, and secure task management application built for productivity.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity shadow-lg">Get Started</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Layout className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Intuitive Dashboard</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Organize your tasks with our drag-and-drop kanban board or list view.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Secure Authentication</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Your data is safe with enterprise-grade security and authentication.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center group">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Track Progress</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay on top of your projects with real-time status updates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 TaskMaster Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

// app/demo/page.tsx

import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="container max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to the Demo Subdomain</h1>
          <p className="text-muted-foreground text-lg">
            Experience our platform s features in this demo environment
          </p>
        </div>

        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>You are currently on the demo subdomain where you can safely test features.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span>Follow the documentation below to explore and customize the platform.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <span>Sign in to access all features by clicking the button below.</span>
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Explore Features
            </Link>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/api/auth/signin"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

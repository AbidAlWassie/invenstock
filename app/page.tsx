// app/page.tsx

import { auth } from "@/app/(auth)/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const demoUrl = `${process.env.PROTOCOL}demo.${process.env.BASE_DOMAIN}`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to <span className="text-blue-600">InvenStock</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Sign up for a free account to access all features and customize your inventory management experience.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Getting Started</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600">Secure authentication with multiple providers.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-gray-600">Explore our comprehensive documentation to customize your experience.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <span className="text-gray-600">Access all features by signing in to your account.</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            {session ? (
              <>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={`/products`}>
                    Explore Admin Features
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={`${demoUrl}/products`}>
                    Explore Demo Features
                  </Link>
                </Button>
              </>
            )
            }


            {session ? (
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/signout">
                  Sign out
                </Link>
              </Button>
            ) : (
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/signin">
                  Sign in
                </Link>
              </Button>
            )}
          </div>

          <div className="mt-6 text-center">
            {session ? (
              <p className="text-gray-600">You are logged in as <span className="font-semibold">{session.user?.name}</span></p>
            ) : (
              <p className="text-gray-600">You are not logged in</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

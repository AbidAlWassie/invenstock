// app/(auth)/signout/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

export default function SignOutPage() {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 to-indigo-900 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-indigo-600 bg-indigo-950/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold text-indigo-100">
            Sign Out
          </CardTitle>
          <CardDescription className="pt-2 text-center text-indigo-300">
            Are you sure you want to sign out?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="w-full bg-red-600 text-white hover:bg-red-700"
          >
            {isSigningOut ? (
              "Signing out..."
            ) : (
              <>
                <FaSignOutAlt className="mr-2 h-4 w-4" aria-hidden="true" />
                Sign Out
              </>
            )}
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full border-indigo-600 text-indigo-300 hover:bg-indigo-800 hover:text-indigo-100"
          >
            <Link href="/">Cancel</Link>
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-center">
          <p className="text-xs text-indigo-300">
            Thank you for using our service.
          </p>
          <div className="text-xs text-slate-400">
            <p>
              Developed with 🍵 by{" "}
              <Link
                href="https://github.com/AbidAlWassie"
                target="_blank"
                className="font-bold text-blue-400"
              >
                Abid Al Wassie
              </Link>
              .
            </p>
            <p>© 2024 Notesap. All rights reserved.</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

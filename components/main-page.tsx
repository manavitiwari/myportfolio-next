/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/b9lix89G378
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function mainPage() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <main className="mx-auto flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center justify-center rounded-full border-4 border-gray-100 w-24 h-24 overflow-hidden lg:w-32 lg:h-32 border-gray-200 dark:border-gray-800" />
        <div className="container grid max-w-3xl items-center gap-4 text-center lg:gap-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Jane Doe
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Im a passionate developer who loves creating amazing web
              experiences.
            </p>
          </div>
          <div className="mx-auto w-full space-y-2 min-[400px]:w-[400px]">
            <Link
              className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm text-sm gap-2 px-4 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm dark:text-gray-50 dark:gap-2 dark:hover:bg-gray-950 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              Follow
            </Link>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  My Projects
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of my recent projects on GitHub.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="w-full">
                <CardHeader className="flex flex-col h-auto p-4">
                  <h3 className="text-xl font-bold">Next.js Blog</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A blog built with Next.js and Tailwind CSS.
                  </p>
                </CardHeader>
                <CardContent className="p-4">
                  <p>
                    This is the description of the project. It is a fantastic
                    project that does amazing things.
                  </p>
                </CardContent>
                <CardFooter className="flex w-full p-4">
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </CardFooter>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex flex-col h-auto p-4">
                  <h3 className="text-xl font-bold">Vercel Docs</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The official Vercel documentation.
                  </p>
                </CardHeader>
                <CardContent className="p-4">
                  <p>
                    This is the description of the project. It is a fantastic
                    project that does amazing things.
                  </p>
                </CardContent>
                <CardFooter className="flex w-full p-4">
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center gap-2 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Want to work together?
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Contact me if youa&aposre interested in collaborating on a
                project.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

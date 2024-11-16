"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreatePage() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Create</h1>
        <div className="w-full max-w-2xl">
          <div className="rounded-lg border bg-card p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full rounded-md border bg-background px-3 py-2"
                  placeholder="Enter title"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full rounded-md border bg-background px-3 py-2 min-h-[100px]"
                  placeholder="Enter description"
                />
              </div>
              <button type="button" onClick={() => router.push("/mcq")}>
                Dashboard
              </button>
              <Link href="/mcq">
                <Button
                  type="button"
                  className="w-full rounded-full bg-primary px-8 py-2 text-primary-foreground hover:opacity-90"
                >
                  Create
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

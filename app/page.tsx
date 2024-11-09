import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold text-center">Welcome to Next.js!</h1>
        <p className="text-center">
          Get started by editing <code>pages/index.tsx</code>
        </p>
        <Button>
          Click me
        </Button>
      </main>
    </div>
  );
}


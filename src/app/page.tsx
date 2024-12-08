import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Square } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Square className="h-8 w-8 text-white" />
            <span className="text-xl font-semibold text-white">Slide</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              href="/features"
              className="text-lg text-white/90 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-lg text-white/90 hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-lg text-white/90 hover:text-white"
            >
              About
            </Link>
          </nav>

          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-gray-900 hover:bg-white/90 text-xl"
          >
            <Link href="/dashboard">Login</Link>
          </Button>
        </div>
      </header>
      <main>
        <section className="py-24 text-center bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="container px-4 py-10 md:px-6 ">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-blue-50 max-w-[800px] mx-auto">
              Transform your instagram engagement with Slide
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-blue-200 text-2xl">
              Slide revolucionizes how you connect with your audience on
              instagram. Automate responses and boost engagement effortlesly,
              turning interactions into valuable business opportunities.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-blue-50 text-blue-600 hover:bg-white text-xl"
              >
                Get started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-black text-white border-black hover:bg-black/70 text-xl hover:text-white"
              >
                Leart more
              </Button>
            </div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Карточка Free Plan */}
              <div className="flex flex-col bg-card text-card-foreground p-8 rounded-lg shadow-lg border-2 hover:border-primary hover:transition-all">
                <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for getting started
                </p>
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    $0
                    <span className="text-xl text-muted-foreground">
                      /month
                    </span>
                  </p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>Basic features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>Limited usage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>Community support</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl"
                >
                  Get Started
                </Button>
              </div>
              {/* Карточка Smart AI */}
              <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg border-2 hover:border-primary hover:transition-all">
                <h3 className="text-2xl font-bold mb-4">Smart AI</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced features for power users
                </p>
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    $29
                    <span className="text-xl text-muted-foreground">
                      /month
                    </span>
                  </p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>All Free Plan features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>Advanced AI capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2 h-5 w-5" />
                    <span>Unlimited usage</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl"
                >
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePageHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://utfs.io/f/33b1b7d5-6497-453b-8563-03676d93779e-26809.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Uncork the Extraordinary
          </h1>
          <p className="max-w-md mb-8 text-xl text-gray-300 sm:max-w-lg md:max-w-2xl">
            Discover exquisite wines sourced from the finest vineyards around
            South Africa. We constantly source new products from all over South
            Africa, doing our best to cut out the middleman for affordability
            and exclusivity.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/shop">Explore Our Wines</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-gray-900 bg-white hover:bg-gray-100"
            >
              <Link href="/events">View Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-8 mx-auto md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop Wines
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Wine Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Tasting Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic">
              <p>270 Walmer Blvd</p>
              <p>South End, 270 Walmer Blvd 6065</p>
              <p>Phone: 082 931 1253</p>
              <p>Email: wine@lifeisgrape.co.za</p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4">
              Stay updated with our latest offers and wine selections!
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-secondary"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-secondary"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-secondary"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-primary-foreground/10">
          <p>
            &copy; {new Date().getFullYear()} Life Is Grape. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

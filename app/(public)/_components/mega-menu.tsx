"use client";

import * as React from "react";
import Link from "next/link";
import { Wine, Grape, MapPin, Gift } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const WineCategory = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({  title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href="/"
          ref={ref}
          className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
WineCategory.displayName = "WineCategory";

export default function WineShopMegamenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Red Wines</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/reds"
                  >
                    <Wine className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Red Wines
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Discover our selection of bold and flavorful red wines.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <WineCategory href="/reds/cabernet" title="Cabernet Sauvignon">
                Bold and full-bodied with rich flavors.
              </WineCategory>
              <WineCategory href="/reds/merlot" title="Merlot">
                Smooth and velvety with soft tannins.
              </WineCategory>
              <WineCategory href="/reds/pinot-noir" title="Pinot Noir">
                Light to medium-bodied with delicate flavors.
              </WineCategory>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>White Wines</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/whites"
                  >
                    <Grape className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      White Wines
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our collection of crisp and refreshing white
                      wines.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <WineCategory href="/whites/chardonnay" title="Chardonnay">
                Rich and buttery with oak influences.
              </WineCategory>
              <WineCategory
                href="/whites/sauvignon-blanc"
                title="Sauvignon Blanc"
              >
                Crisp and zesty with herbal notes.
              </WineCategory>
              <WineCategory href="/whites/riesling" title="Riesling">
                Aromatic and ranging from dry to sweet.
              </WineCategory>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sparkling</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <WineCategory href="/sparkling/champagne" title="Champagne">
                The classic French sparkling wine.
              </WineCategory>
              <WineCategory href="/sparkling/prosecco" title="Prosecco">
                Italian sparkling wine with light bubbles.
              </WineCategory>
              <WineCategory href="/sparkling/cava" title="Cava">
                Spanish sparkling wine with crisp acidity.
              </WineCategory>
              <WineCategory href="/sparkling/rose" title="Sparkling Rosé">
                Pink sparkling wines with berry flavors.
              </WineCategory>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Regions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <WineCategory href="/regions/france" title="France">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                Bordeaux, Burgundy, Champagne, and more.
              </WineCategory>
              <WineCategory href="/regions/italy" title="Italy">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                Tuscany, Piedmont, Veneto, and beyond.
              </WineCategory>
              <WineCategory href="/regions/spain" title="Spain">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                Rioja, Ribera del Duero, Priorat, and others.
              </WineCategory>
              <WineCategory href="/regions/new-world" title="New World">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                California, Australia, Chile, and more.
              </WineCategory>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"

          >
            <Link href="/special-offers" className="flex flex-row items-center">
            <Gift className="w-4 h-4 mr-2" /> Special Offers
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

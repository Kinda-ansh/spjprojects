import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function ListItem({ className, title, children, ...props }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
ListItem.displayName = "ListItem";
export default function NavigationMenuDemo() {
  return (
    /* lg screen menu st ##################  */
    <NavigationMenu>
      <NavigationMenuList className="flex gap-7">
        <NavigationMenuItem className="flex">
          <NavLink to="/sarkari-jobs" className="text-white hover:text-divyang">
            Sarkari Jobs
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex">
          <NavLink to="/private-jobs" className="text-white hover:text-divyang">
            Private Jobs
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex">
          <NavLink to="/results" className="text-white hover:text-divyang">
            Results
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex">
          <NavLink to="/latest-news" className="text-white hover:text-divyang">
            Latest News
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex">
          <NavLink to="/answer-key" className="text-white hover:text-divyang">
            Answer keys
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex">
          <NavLink to="/admit-card" className="text-white hover:text-divyang">
            Admit Card
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    /* lg screen menu end ##################  */
  );
}

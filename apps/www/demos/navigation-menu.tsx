import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "ui98"

const neighborhoods = [
  { title: "Area51", description: "Sci-fi, fantasy and the X-Files." },
  { title: "Hollywood", description: "Movies, TV and celebrity shrines." },
  { title: "SiliconValley", description: "Computers and Web design tips." },
  { title: "Tokyo", description: "Anime, manga and Japanese culture." },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Neighborhoods</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-80 gap-1 p-1">
              {neighborhoods.map((hood) => (
                <li key={hood.title}>
                  <NavigationMenuLink href="#">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold">{hood.title}</span>
                      <span className="text-xs">{hood.description}</span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Guestbook</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Webrings</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

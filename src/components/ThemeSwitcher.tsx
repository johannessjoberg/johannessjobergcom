"use client"

import { IconButton, DropdownMenu } from "@radix-ui/themes"
import {
  DesktopIcon,
  MoonIcon,
  SunIcon,
  Half2Icon,
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const icon = {
  light: SunIcon,
  dark: MoonIcon,
  system: DesktopIcon,
}

function getIcon(theme?: string, systemTheme?: string) {
  if (theme === "dark") return MoonIcon
  if (theme === "system") {
    return systemTheme === "dark" ? MoonIcon : SunIcon
  }

  return SunIcon
}

export function ThemeSwitcher() {
  const { setTheme, theme, systemTheme } = useTheme()
  const Icon = getIcon(theme, systemTheme)

  return (
    <IconButton
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      variant="ghost"
      color="gray"
    >
      <Half2Icon width={20} height={20} />
    </IconButton>
  )

  // return (
  //   <DropdownMenu.Root>
  //     <DropdownMenu.Trigger>
  //       <IconButton variant="ghost">
  //         <Half2Icon width={15} height={15}/>
  //       </IconButton>
  //     </DropdownMenu.Trigger>
  //     <DropdownMenu.Content>
  //       <DropdownMenu.Item onClick={() => setTheme("light")}>Light <SunIcon/></DropdownMenu.Item>
  //       <DropdownMenu.Item onClick={() => setTheme("dark")}>Dark <MoonIcon/></DropdownMenu.Item>
  //       <DropdownMenu.Item onClick={() => setTheme("system")}>System &nbsp;&nbsp;&nbsp;
  //         <DesktopIcon/></DropdownMenu.Item>
  //     </DropdownMenu.Content>
  //   </DropdownMenu.Root>)
}

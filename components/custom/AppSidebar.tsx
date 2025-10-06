import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import dashboardLogo from "../../app/images/logo.png"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible'
import { CollapsibleTrigger } from '../ui/collapsible'

const AppSidebar = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox
    },
    {
      title: "Calender",
      url: "#",
      icon: Calendar
    },
    {
      title: "Search",
      url: "#",
      icon: Search 
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings
    },
  ]
  return (
    <Sidebar collapsible='icon'>
      {/* Sidebar Header */}
      <SidebarHeader className='py-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src={dashboardLogo} alt="logo" width={20} height={20} />
                <span>Admin Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        {/* Application Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {
                    item.title === "Inbox" && (
                      <SidebarMenuBadge>24</SidebarMenuBadge>
                    )
                  }
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Add Project Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className='sr-only'>Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Projector /> See All Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus /> Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Collapsible Menu */}
        <Collapsible defaultOpen className='group/collapsible'>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Collapsible Group
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180'/>
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Projector /> See All Projects
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Plus /> Add Project
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* Nested Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Projector /> See All Projects
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubButton asChild>
                    <Link href="#">
                      <Plus /> Add Project
                    </Link>
                  </SidebarMenuSubButton>
                  <SidebarMenuSubButton asChild>
                    <Link href="#">
                      <Plus /> Add Category
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Sidebar Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User /> Sarika Mahboob <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Landmark,
  BookMarked,   
  Mail,
  MoreHorizontal,
 
  User,
  LandmarkIcon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { translations_about } from "@/lib/translations_about";


const Navbar = () => {
  const { lang } = useLang();
  const t = translations_about[lang];

  const data = [
    {
      title: t.nav_bar[0],
      icon: (
        <HomeIcon className='h-full w-full ' />
      ),
      href: '/',
    },
    {
      title: t.nav_bar[1],
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '/about',
    },
    {
      title: t.nav_bar[2],
      icon: (
        <BookMarked className='h-full w-full ' />
      ),
      href: '/publications',
    },
    // {
    //   title: 'Parcours',
    //   icon: (
    //     <GraduationCap className='h-full w-full ' />
    //   ),
    //   href: '/education',
    // },
    {
      title: t.nav_bar[3],
      icon: (
        <FolderGit2 className='h-full w-full ' />
      ),
      href: '/projects',
    },
    // {
    //   title: 'Affiliations',
    //   icon: (
    //     <LandmarkIcon className='h-full w-full ' />
    //   ),
    //   href: '/affiliations',
    // },
   
    // {
    //   title: 'More',
    //   icon: (
    //     <MoreHorizontal className='h-full w-full ' />
    //   ),
    //   href: '/more',
    // },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <div className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden":"block"}`}>
    <Dock className='items-end pb-3 rounded-full'>
      {data.map((item, idx) => (
        <Link href={item.href} key={idx}>

        <DockItem
          className={cn("aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",pathname === item.href && " bg-gray-100 !border !border-primary-sky")}
          >
          <DockLabel >{item.title}</DockLabel>
          <DockIcon className={cn(pathname === item.href && "text-[#F54927]")}>{item.icon}</DockIcon> 
        </DockItem>
          </Link>
      ))}
    </Dock>
    </div>
  );
};

export default Navbar;

'use client'
import { useLang } from '@/context/LangContext'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: readonly string[];
    link: string;
    githublink?: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  const { lang } = useLang()
  return (
    <FramerWrapper 
      className="max-w-[32%] max-lg:max-w-full" 
      y={0} 
      scale={0.8} 
      delay={num/4} 
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">{value.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{value.description}</p>          
          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const tagStyles = {
                'Development': 'bg-red-100 text-red-800',
                'Développement': 'bg-red-100 text-red-800',
                'Research project': 'bg-yellow-100 text-yellow-800',
                'Projet de recherche': 'bg-yellow-100 text-yellow-800',
                'Open source': 'bg-blue-100 text-blue-800',
                'Shadcn Ui': 'bg-blue-100 text-blue-800',
                'Autre': 'bg-blue-100 text-blue-800',
              }[tag] || 'bg-gray-100 text-gray-800';

              return (
                <span 
                  key={index}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagStyles}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-2 ">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ 
                variant: "default", 
                size: "sm" 
              }),
              "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            {lang === 'fr' ? 'Voir le projet' : 'View project'}
            <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </Link>

          {value.githublink && value.githublink !== "" && (
            <Link
              href={value.githublink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group ml-3"
              )}
            >
              {lang === 'fr' ? 'Voir le code sur Github' : 'View code on Github'}
              <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
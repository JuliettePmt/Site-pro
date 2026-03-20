"use client"
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { translations_affiliations } from "@/lib/translations_affiliations";

const affiliationsPage = () => {
  const { lang } = useLang();
  const t = translations_affiliations[lang];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
    <Badge variant="secondary" className="gap-1.5 py-1 ">
    <Briefcase className="h-3 w-3" />
    {t.title}
    </Badge>
      <div className="flex flex-col gap-3 ">
        <Heading>{t.title}</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        {t.items.map((affiliation, index) => (
          <div  key={index}>

            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 affiliations_point "
            >
              <div className="text-2xl max-sm:text-sm">
                {affiliation.institution}
                </div>
                <div className="text-m italic text-primary max-sm:text-sm ">
                {affiliation.subtitle}
              </div>
              <p className="font-poppins text-base w-full text-muted-foreground max-sm:text-xs mt-2">
                {affiliation.description}
              </p>
              <p className="font-poppins text-xs w-full text-muted-foreground max-sm:text-xs mt-2">
                {affiliation.period}
              </p>
              <p className="font-poppins text-xs w-full text-muted-foreground max-sm:text-xs -mt-3">
              {affiliation.url && (
                <a href={affiliation.url} target="_blank" rel="noopener noreferrer" className="font-poppins text-xs text-muted-foreground mt-2 inline-flex items-center gap-1 hover:text-[hsl(var(--primary-sky))] transition-colors">
                    {affiliation.url_title}
                    <ExternalLink className="h-3 w-3" />
                </a>
                )}      
              </p>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};
export default affiliationsPage;
"use client"
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { useLang } from "@/context/LangContext";
import { translations_projects } from "@/lib/translations_projects";

const projectsPage = () => {
  const { lang } = useLang();
  const t = translations_projects[lang];

return (
// PROJECT PAGE
<div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
<Badge variant="secondary" className="gap-1.5 py-1 ">
<Layers className="h-4 w-4" />
        {t.projects_badge}
</Badge>
<div className="flex flex-col gap-3">
<Heading>{t.projects_title}</Heading>
<FramerWrapper y={0} x={200}>
<p className=" font-poppins text-lg w-full text-tertiary max-sm:text-base">
          {t.projects_subtitle}
</p>
</FramerWrapper>
</div>
<div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
{t.projects.map((val, indx) => {
return <ProjectCards key={indx} value={val} num={indx} />;
        })}
</div>
</div>
  );
};
export default projectsPage;
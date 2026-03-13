"use client"
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import PublicationCards from "@/components/PublicationsCards";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { translations_publications } from "@/lib/translations_publications";

const publicationsPage = () => {
  const { lang } = useLang();
  const t = translations_publications[lang];

return (
// PUBLICATION PAGE
<div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
<Badge variant="secondary" className="gap-1.5 py-1 ">
<Layers className="h-4 w-4" />
        {t.badge}
</Badge>
<div className="flex flex-col gap-3">
<Heading>{t.title}</Heading>
<FramerWrapper y={0} x={200}>
<p className=" font-poppins text-lg w-full text-tertiary max-sm:text-base">
          {t.subtitle}
</p>
</FramerWrapper>
</div>
<div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
{t.publications.map((val, indx) => {
return <PublicationCards key={indx} value={val} num={indx} />;
        })}
</div>
</div>
  );
};
export default publicationsPage;
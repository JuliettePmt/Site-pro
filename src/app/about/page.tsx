"use client"
import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { useLang } from "@/context/LangContext";
import { translations_about } from "@/lib/translations_about";
import dynamic from "next/dynamic";

const MapChart = dynamic(() => import("@/components/Map"), { ssr: false });

const page = () => {
  const phd_description = portfolioConfig.about.phd_description;
  const { lang } = useLang();
  const t = translations_about[lang];

  return (
    <div className="h-full w-full relative flex flex-row gap-10 items-start overflow-hidden">

      {/* Colonne gauche - tout le contenu texte */}
      <div className="flex flex-col gap-5 flex-1">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <User2 className="h-4 w-4" />
          {t.badge}
        </Badge>

        <Heading>{t.intro[0]}</Heading>

        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-sm w-full text-tertiary max-sm:text-lg">
            {t.intro[1]} {t.bio[0]} {t.bio[1]} {t.bio[2]}{" "}
            <span className="text-xl">{t.disciplines[0]}</span> {t.bio[3]}{" "}
            <span className="text-xl text-[hsl(var(--primary-sky))]">{t.faculties[0]}</span>{" "}
            {t.bio[4]} {t.bio[5]} {t.bio[6]}{" "}
            <span className="text-xl">{t.disciplines[1]}</span> {t.bio[8]}{" "}
            <span className="text-xl text-[hsl(var(--primary-sky))]">{t.faculties[1]}</span>.
          </p>

          <Heading><p className="w-full mt-10">{t.intro_phd}</p></Heading>
          <p className="font-poppins text-sm w-full text-tertiary max-sm:text-lg mt-5">
            {t.phd_subject}
          </p>
        </FramerWrapper>
      </div>

      {/* Colonne droite - carte tout en haut */}
      <div className="flex-1 pt-2">
        <MapChart />
      </div>

    </div>
  );
};

export default page;
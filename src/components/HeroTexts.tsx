"use client"
import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";
import { useLang } from "@/context/LangContext";
import { translations_home } from "@/lib/translations_home";

const HeroTexts = () => {
const { lang } = useLang();
const t = translations_home[lang];
const nameParts = portfolioConfig.name.split(" ");
const firstName = nameParts[0];
const middleName = nameParts.length > 2 ? nameParts[1] : "";
const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];
return (
<>
<h1 className="font-rubik text-5xl name_underline text-primary max-sm:text-6xl ">
{firstName} {middleName}  {lastName}
</h1>
<TextRotator />
<h3 className="font-montserrat text-3sm max-sm:text-sm">{t.tagline}</h3>
</>
  );
};
export default HeroTexts;
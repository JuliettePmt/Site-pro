import { cn } from "@/lib/utils";
import {
  Linkedin,
  // ExternalLink,
  Github,
} from "lucide-react";
import orcidLogo from "./logos/orcid_logo.png"
import researchgateLogo from "./logos/researchgate_logo.png"
import halLogoSrc from "./logos/hal_logo.svg"
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Hal",
      link: portfolioConfig.socialLinks.hal,
      icon: <img src={halLogoSrc.src} alt="Hal" width={(50)} height={30} />,
    },
    {
      name: "ResearchGate",
      link: portfolioConfig.socialLinks.researchgate,
      icon: <img src={researchgateLogo.src} alt="ResearchGate" width={(25)} height={20} />,
    },
    // {
    //   name: "External",
    //   link: portfolioConfig.socialLinks.external,
    //   icon: <ExternalLink />,
    // },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
    {
      name: "Orcid",
      link: portfolioConfig.socialLinks.orcid,
      icon: <img src={orcidLogo.src} alt="Orcid" width={(34)} height={33} />,
    },
    
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;

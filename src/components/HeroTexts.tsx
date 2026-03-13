import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
  // Get the name parts
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
      <h3 className="font-poppins text-2sm max-sm:text-sm">Je travaille sur la quantification des pratiques culturelles sur les plateformes numériques.</h3>

    </>
  );
};
export default HeroTexts;

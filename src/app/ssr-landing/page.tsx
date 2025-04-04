// primario #03363e
// secundario #17494c
// tercero #e4f0d3

import { HeaderLanding } from "@/components/landing/HeaderLanding";
import { MiniMenu } from "@/components/landing/MiniMenu";
import { PrincipalContent } from "@/components/landing/PrincipalContent";
import { QuickTour } from "@/components/landing/QuickTour";
import { TopBanner } from "@/components/landing/TopBanner";

const LandingPage = () => {
  return (
    <div>
      <TopBanner />
      <MiniMenu />
      <HeaderLanding />
      <PrincipalContent />
      <QuickTour />
    </div>
  )
}

export default LandingPage;
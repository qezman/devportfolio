import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToSection = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  return null;
};

export default ScrollToSection;

import RootLayout from "@/app/layout";
import React, { useEffect, useState } from "react";

type MainProps = {
  Component: React.FC;
};

const MyApp = ({ Component }: MainProps) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <div>
      <RootLayout>
        <Component />
      </RootLayout>
    </div>
  );
};

export default MyApp;

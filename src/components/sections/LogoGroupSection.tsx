import React from "react";

function LogoGroupSection() {
  return (
    <section>
      <div className="hidden md:block w-full">
        <img
          src="/images/logo_group_desktop.png"
          alt="logo group"
          className="w-full object-cover saturate-0"
        />
      </div>
      <div className="block md:hidden w-full">
        <img
          src="/images/logo_group_mobile.png"
          alt="logo group"
          className="w-full object-cover saturate-0"
        />
      </div>
    </section>
  );
}

export default LogoGroupSection;

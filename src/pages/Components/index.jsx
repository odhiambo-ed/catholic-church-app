import React from "react";

import HomeFooter from "components/HomeFooter";
import ComponentsNavbar from "components/ComponentsNavbar";

const ComponentsPage = () => {
  return (
    <>
      <div className="flex flex-col font-robotocondensed sm:gap-10 md:gap-10 gap-32 items-center justify-start mx-auto w-full">
        <HomeFooter
          className="bg-gray_900 flex flex-row items-center justify-start p-16 md:px-10 sm:px-5 w-full"
          copyrightfinsweOne="© Copyright Finsweet 2022"
          p4805550103="(480) 555-0103"
          language="4517 Washington Ave. "
          email="finsweet@example.com"
          quicklinks="Quicklinks"
          aboutusOne="About us"
          sermons="Sermons"
          events="Events"
          blogOne="Blog"
          languageOne="Connect "
          linkedin="images/img_linkedin_orange_100.svg"
          subscribetoget="Subscribe to get Latest Updates and News"
          subscribe="Subscribe"
        />
        <ComponentsNavbar
          className="bg-black_900 flex items-center justify-center md:px-5 w-full"
          home="Home"
          aboutusOne="About us"
          sermon="Sermon"
          blogOne="Blog"
          contactUs="Contact us"
        />
      </div>
    </>
  );
};

export default ComponentsPage;

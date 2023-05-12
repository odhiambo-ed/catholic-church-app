import React from "react";

import { Img, Line, Text, Button } from "components";

const ComponentsNavbar = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto w-[86%]">
          <Img
            src="images/img_logo.svg"
            className="h-[26px] w-auto"
            alt="logo_One"
          />
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:ml-[0] ml-[66px] w-[32%] md:w-full">
            <Line className="bg-white_A700_63 sm:h-0.5 h-20 w-0.5 sm:w-full" />
            <Text
              className="font-normal font-robotocondensed sm:ml-[0] ml-[62px] not-italic text-right text-white_A700_ab uppercase w-auto"
              as="h6"
              variant="h6"
            >
              {props?.home}
            </Text>
            <Text
              className="font-normal font-robotocondensed ml-12 sm:ml-[0] not-italic text-left text-white_A700_ab uppercase w-auto"
              as="h6"
              variant="h6"
            >
              {props?.aboutusOne}
            </Text>
            <Text
              className="font-normal font-robotocondensed ml-12 sm:ml-[0] not-italic text-left text-white_A700_ab uppercase w-auto"
              as="h6"
              variant="h6"
            >
              {props?.sermon}
            </Text>
            <Text
              className="font-normal cursor-pointer font-robotocondensed ml-12 sm:ml-[0] not-italic text-left text-white_A700_ab uppercase w-auto"
              as="h6"
              variant="h6"
            >
              {props?.blogOne}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-normal font-robotocondensed min-w-[179px] md:ml-[0] ml-[497px] md:mt-0 my-3 not-italic text-base text-center text-gray_900_01 uppercase w-auto"
            shape="RoundedBorder12"
            size="sm"
            variant="Outline_1"
          >
            {props?.contactUs}
          </Button>
        </div>
      </footer>
    </>
  );
};

ComponentsNavbar.defaultProps = {
  home: "Home",
  aboutusOne: "About us",
  sermon: "Sermon",
  blogOne: "Blog",
  contactUs: "Contact us",
};

export default ComponentsNavbar;

import React from "react";

import { Img, Line, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          src="images/img_logo.svg"
          className="h-[26px] md:ml-[0] ml-[110px] md:mt-0 my-[26px] w-auto"
          alt="logo"
        />
        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:ml-[0] ml-[66px] w-[28%] md:w-full">
          <Line className="bg-white_A700_63 sm:h-0.5 h-20 w-0.5 sm:w-full" />
          <Text
            className="font-normal font-robotocondensed sm:ml-[0] ml-[62px] not-italic text-right text-white_A700_ab uppercase w-auto"
            as="h6"
            variant="h6"
          >
            Home
          </Text>
          <Text
            className="font-normal font-robotocondensed ml-12 sm:ml-[0] not-italic text-left text-white_A700_ab uppercase w-auto"
            as="h6"
            variant="h6"
          >
            About us
          </Text>
          <Text
            className="font-normal font-robotocondensed ml-12 sm:ml-[0] not-italic text-left text-white_A700_ab uppercase w-auto"
            as="h6"
            variant="h6"
          >
            Sermon
          </Text>
          <Text
            className="font-normal font-robotocondensed ml-12 sm:ml-[0] not-italic text-left text-white_A700_ab uppercase w-auto"
            as="h6"
            variant="h6"
          >
            Blog
          </Text>
        </div>
        <Button
          className="cursor-pointer font-normal font-robotocondensed min-w-[180px] md:ml-[0] ml-[496px] mr-[109px] md:mt-0 my-3 not-italic text-base text-center text-gray_900_01 uppercase w-auto"
          shape="RoundedBorder12"
          size="sm"
          variant="Outline_1"
        >
          Contact us
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

import React from "react";

import { Img, Text, Button, Input } from "components";

const HomeFooter = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-16 w-[86%]">
          <div className="flex flex-col items-start justify-start w-[12%] md:w-full">
            <Img
              src="images/img_logo_orange_100_01.svg"
              className="h-7 w-auto"
              alt="logo_One"
            />
            <Text
              className="font-normal font-robotocondensed mt-[26px] not-italic text-center text-white_A700 uppercase w-auto"
              variant="body1"
            >
              {props?.copyrightfinsweOne}
            </Text>
            <div className="flex flex-col items-start justify-start mt-[31px] w-auto md:w-full">
              <Text
                className="font-normal font-robotocondensed not-italic text-left text-white_A700 uppercase w-auto"
                variant="body1"
              >
                {props?.p4805550103}
              </Text>
              <Text
                className="font-normal font-robotocondensed mt-3.5 not-italic text-left text-white_A700 uppercase w-auto"
                variant="body1"
              >
                {props?.language}
              </Text>
              <Text
                className="font-normal font-robotocondensed mt-4 not-italic text-left text-white_A700 uppercase w-auto"
                variant="body1"
              >
                {props?.email}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[278px] w-[6%] md:w-full">
            <Text
              className="font-normal font-robotocondensed not-italic text-right text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.quicklinks}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Text
                className="font-normal font-robotocondensed not-italic text-left text-white_A700_a0 uppercase w-auto"
                variant="body1"
              >
                {props?.aboutusOne}
              </Text>
              <Text
                className="font-normal font-robotocondensed mt-[23px] not-italic text-left text-white_A700_a0 uppercase w-auto"
                variant="body1"
              >
                {props?.sermons}
              </Text>
              <Text
                className="font-normal font-robotocondensed mt-[23px] not-italic text-left text-white_A700_a0 uppercase w-auto"
                variant="body1"
              >
                {props?.events}
              </Text>
              <Text
                className="font-normal font-robotocondensed mt-[23px] not-italic text-left text-white_A700_a0 uppercase w-auto"
                variant="body1"
              >
                {props?.blogOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[72px] w-[7%] md:w-full">
            <Text
              className="font-normal font-robotocondensed not-italic text-left text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.languageOne}
            </Text>
            <div className="flex flex-row gap-5 items-center justify-between w-full">
              <Img
                src="images/img_facebooknegative.svg"
                className="h-4 w-4"
                alt="facebooknegativ"
              />
              <Img
                src="images/img_twitternegative.svg"
                className="h-4 w-4"
                alt="twitternegative"
              />
              <Img src={props?.linkedin} className="h-4 w-4" alt="linkedin" />
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[115px] w-2/5 md:w-full">
            <Text
              className="font-robotocondensed leading-[44.00px] text-left text-white_A700 tracking-[-0.32px] uppercase w-[74%] sm:w-full"
              as="h3"
              variant="h3"
            >
              {props?.subscribetoget}
            </Text>
            <div className="h-16 relative w-full">
              <Button
                className="absolute cursor-pointer font-normal font-robotocondensed h-full inset-y-[0] min-w-[201px] my-auto not-italic right-[0] text-base text-center text-gray_900_01 uppercase w-auto"
                shape="RoundedBorder12"
                size="md"
                variant="FillOrange100"
              >
                {props?.subscribe}
              </Button>
              <Input
                wrapClassName="absolute inset-[0] m-auto w-full"
                className="font-normal font-robotocondensed justify-center not-italic p-0 placeholder:text-white_A700_a2 text-base text-right text-white_A700_a2 w-full"
                name="email_One"
                placeholder="Yourmail@gmail.com"
                shape="RoundedBorder12"
                size="sm"
                variant="OutlineWhiteA70026"
              ></Input>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

HomeFooter.defaultProps = {
  copyrightfinsweOne: "© Copyright Finsweet 2022",
  p4805550103: "(480) 555-0103",
  language: "4517 Washington Ave. ",
  email: "finsweet@example.com",
  quicklinks: "Quicklinks",
  aboutusOne: "About us",
  sermons: "Sermons",
  events: "Events",
  blogOne: "Blog",
  languageOne: "Connect ",
  linkedin: "images/img_linkedin.svg",
  subscribetoget: "Subscribe to get Latest Updates and News",
  subscribe: "Subscribe",
};

export default HomeFooter;

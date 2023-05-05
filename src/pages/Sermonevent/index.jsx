import React from "react";

import Header from "components/Header";
import { Img, Text, Line, Input, Button, List } from "components";
import HomeFooter from "components/HomeFooter";

const SermoneventPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-robotocondensed items-center justify-start mx-auto w-full">
        <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-7xl mt-32 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
            <Img
              src="images/img_httpsunsplas_334x630.png"
              className="h-[334px] sm:h-auto object-cover w-full"
              alt="httpsunsplas"
            />
            <Text
              className="bg-clip-text bg-gradient2  font-bold mt-[31px] text-left text-transparent tracking-[0.96px] uppercase w-auto"
              variant="body1"
            >
              Upcoming Event
            </Text>
            <Text
              className="mt-[18px] text-gray_900 text-left tracking-[-0.48px] uppercase w-auto"
              as="h2"
              variant="h2"
            >
              HOW TO TRULY TRUST SOMEONE
            </Text>
            <Text
              className="font-normal leading-[24.00px] mt-5 not-italic text-gray_900_a0 text-left w-full"
              as="h6"
              variant="h6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
              Pharetra sit amet aliquam id diam maecenas ultricies.
            </Text>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start mt-6 w-full">
              <Line className="bg-orange_100 md:h-0.5 h-[120px] w-0.5 md:w-full" />
              <Text
                className="sm:flex-1 font-normal leading-[150.00%] not-italic text-gray_900_a0 text-left w-[97%] sm:w-full"
                as="h4"
                variant="h4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                faucibus in ornare quam viverra orci sagittis eu volutpat.
              </Text>
            </div>
            <Text
              className="font-normal leading-[24.00px] mt-6 not-italic text-gray_900_a0 text-left w-full"
              as="h6"
              variant="h6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
              Pharetra sit amet aliquam id diam maecenas ultricies.
            </Text>
          </div>
          <div className="bg-gray_50 flex md:flex-1 flex-col items-start justify-end mb-[304px] p-10 sm:px-5 w-[41%] md:w-full">
            <Text
              className="mt-0.5 text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
              as="h3"
              variant="h3"
            >
              rEGISTER nOW
            </Text>
            <div className="flex flex-row gap-[15px] items-start justify-start mr-auto mt-[35px] w-[79%] md:w-full">
              <div className="flex flex-row gap-2.5 items-start justify-start w-[64%]">
                <Img
                  src="images/img_shape.svg"
                  className="h-6 w-6"
                  alt="shape"
                />
                <Text
                  className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-[85%] sm:w-full"
                  as="h6"
                  variant="h6"
                >
                  No 233 Main St. New York, United States
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[33%]">
                <Img
                  src="images/img_clock_gray_900.svg"
                  className="h-6 w-6"
                  alt="clock"
                />
                <Text
                  className="font-normal mt-[3px] not-italic text-gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  13 May, 2018
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-roboto gap-3.5 items-start justify-start mt-8 w-[94%] md:w-full">
              <Text
                className="font-medium text-blue_gray_900_90 text-left w-auto"
                variant="body1"
              >
                Full Name
              </Text>
              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                <Text
                  className="font-medium text-gray_900_03 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Leonard John
                </Text>
                <Line className="bg-blue_gray_900_6c h-px w-full" />
              </div>
            </div>
            <div className="flex flex-col font-roboto gap-4 items-start justify-start mt-[31px] w-[94%] md:w-full">
              <Text
                className="font-medium text-blue_gray_900_90 text-left w-auto"
                variant="body1"
              >
                Email
              </Text>
              <Input
                wrapClassName="pr-[35px] w-full"
                className="font-medium p-0 placeholder:text-gray_900_03 sm:pr-5 text-base text-gray_900_03 text-left w-full"
                type="email"
                name="email_One"
                placeholder="admin@abc.com"
                size="md"
                variant="UnderLineBluegray9006c"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-normal min-w-[227px] mt-[31px] not-italic text-base text-center text-gray_900_01 uppercase w-auto"
              shape="RoundedBorder12"
              size="md"
              variant="FillOrange100"
            >
              Register now
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-7xl mt-[130px] mx-auto md:px-5 w-full">
          <Text
            className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
            as="h2"
            variant="h2"
          >
            Upcoming Sermons
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-1 flex-col justify-end pt-[22px] w-full">
              <div className="md:h-[29px] h-[47px] md:ml-[0] ml-[244px] mr-[26px] relative w-[11%]">
                <Text
                  className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-gray_900 text-left uppercase w-max"
                  as="h6"
                  variant="h6"
                >
                  JULY
                </Text>
                <Text
                  className="absolute font-bold right-[0] text-gray_900 text-left top-[0] tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  20
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-2 mx-auto w-[74%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                      variant="body1"
                    >
                      Upcoming Event
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase w-full"
                      as="h4"
                      variant="h4"
                    >
                      100 RANDOM ACTS OF KINDNESS
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-8 w-[78%] md:w-full">
                  <Img
                    src="images/img_clock.svg"
                    className="h-5 mt-0.5 w-5"
                    alt="clock"
                  />
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-4/5 sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    Friday 23:39 IST Saturday 11:20 ISD
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-4 w-full">
                  <Img
                    src="images/img_globe.svg"
                    className="h-[25px] mt-1 w-auto"
                    alt="globe"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[24.00px] not-italic text-gray_900 text-left w-[84%] sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    No 233 Main St. New York, United States
                  </Text>
                </div>
              </div>
              <div className="bg-orange_100_01 h-4 mt-16 w-full"></div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col gap-[9px] justify-start p-[22px] sm:px-5 w-full">
              <div className="md:h-[29px] h-[47px] md:ml-[0] ml-[221px] relative w-[13%]">
                <Text
                  className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-gray_900 text-left uppercase w-max"
                  as="h6"
                  variant="h6"
                >
                  JULY
                </Text>
                <Text
                  className="absolute font-bold right-[0] text-gray_900 text-left top-[0] tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  20
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[57px] mx-auto w-[87%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                      variant="body1"
                    >
                      Upcoming Event
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase w-full"
                      as="h4"
                      variant="h4"
                    >
                      FAITH IS A PROCESS, NOT A DESTINATION
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-8 w-[78%] md:w-full">
                  <Img
                    src="images/img_clock.svg"
                    className="h-5 mt-0.5 w-5"
                    alt="clock"
                  />
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-4/5 sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    Friday 23:39 IST Saturday 11:20 ISD
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-4 w-full">
                  <Img
                    src="images/img_globe.svg"
                    className="h-[25px] mt-1 w-auto"
                    alt="globe"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[24.00px] not-italic text-gray_900 text-left w-[84%] sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    No 233 Main St. New York, United States
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col gap-[9px] justify-start p-[22px] sm:px-5 w-full">
              <div className="md:h-[29px] h-[47px] md:ml-[0] ml-[221px] relative w-[13%]">
                <Text
                  className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-gray_900 text-left uppercase w-max"
                  as="h6"
                  variant="h6"
                >
                  JULY
                </Text>
                <Text
                  className="absolute font-bold right-[0] text-gray_900 text-left top-[0] tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  20
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[57px] mx-auto w-[87%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                      variant="body1"
                    >
                      Upcoming Event
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase w-full"
                      as="h4"
                      variant="h4"
                    >
                      THERE IS NOTHING IMPOSSIBLE
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-8 w-[78%] md:w-full">
                  <Img
                    src="images/img_clock.svg"
                    className="h-5 mt-0.5 w-5"
                    alt="clock"
                  />
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-4/5 sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    Friday 23:39 IST Saturday 11:20 ISD
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-4 w-full">
                  <Img
                    src="images/img_globe.svg"
                    className="h-[25px] mt-1 w-auto"
                    alt="globe"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[24.00px] not-italic text-gray_900 text-left w-[84%] sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    No 233 Main St. New York, United States
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col gap-[9px] justify-start p-[22px] sm:px-5 w-full">
              <div className="md:h-[29px] h-[47px] md:ml-[0] ml-[221px] relative w-[13%]">
                <Text
                  className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-gray_900 text-left uppercase w-max"
                  as="h6"
                  variant="h6"
                >
                  JULY
                </Text>
                <Text
                  className="absolute font-bold right-[0] text-gray_900 text-left top-[0] tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  20
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[57px] mx-auto w-[87%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                      variant="body1"
                    >
                      Upcoming Event
                    </Text>
                    <Text
                      className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase w-full"
                      as="h4"
                      variant="h4"
                    >
                      Celebrating freedom and life
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-8 w-[78%] md:w-full">
                  <Img
                    src="images/img_clock.svg"
                    className="h-5 mt-0.5 w-5"
                    alt="clock"
                  />
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-4/5 sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    Friday 23:39 IST Saturday 11:20 ISD
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-4 w-full">
                  <Img
                    src="images/img_globe.svg"
                    className="h-[25px] mt-1 w-auto"
                    alt="globe"
                  />
                  <Text
                    className="sm:flex-1 font-normal leading-[24.00px] not-italic text-gray_900 text-left w-[84%] sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    No 233 Main St. New York, United States
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
        <HomeFooter
          className="bg-gray_900 flex items-center justify-center mt-32 md:px-5 w-full"
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
          linkedin="images/img_linkedin.svg"
          subscribetoget="Subscribe to get Latest Updates and News"
          subscribe="Subscribe"
        />
      </div>
    </>
  );
};

export default SermoneventPage;

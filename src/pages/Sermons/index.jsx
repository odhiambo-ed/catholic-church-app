import React from "react";

import Header from "components/Header";
import { Img, Text, Button, List } from "components";
import HomeFooter from "components/HomeFooter";

const SermonsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-robotocondensed items-center justify-start mx-auto w-full">
        <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[419px] md:px-5 relative w-full">
            <Img
              src="images/img_httpsunsplas_419x1500.png"
              className="h-[419px] m-auto object-cover w-full"
              alt="httpsunsplas"
            />
            <div className="absolute flex flex-col gap-[18px] h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-auto">
              <Text
                className="font-bold text-blue_gray_900 text-left uppercase w-auto"
                as="h6"
                variant="h6"
              >
                SERMON
              </Text>
              <Text
                className="text-blue_gray_900 text-left tracking-[-0.48px] uppercase w-auto"
                as="h2"
                variant="h2"
              >
                take part in OUR SERMON
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start max-w-7xl mt-[127px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
            <Text
              className="font-normal not-italic text-gray_900 text-left uppercase w-auto"
              as="h6"
              variant="h6"
            >
              Upcoming SERMONS
            </Text>
            <Text
              className="leading-[64.00px] text-center text-gray_900 tracking-[-0.48px] uppercase w-full"
              as="h2"
              variant="h2"
            >
              join us and become part of something great
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-16 w-full">
            <div className="bg-yellow_50 flex md:flex-1 sm:flex-col flex-row gap-[26px] items-start justify-center p-[30px] sm:px-5 w-[34%] md:w-full">
              <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[58px] sm:mt-0 my-[29px] w-[69%] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                    variant="body1"
                  >
                    Upcoming Event
                  </Text>
                  <Text
                    className="font-bold mt-[15px] text-gray_900 text-left tracking-[-0.24px] uppercase w-[83%] sm:w-full"
                    as="h4"
                    variant="h4"
                  >
                    WATCH AND LISTEN TO OUR SERMONS
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-8 w-[68%] md:w-full">
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
                <div className="flex flex-row gap-4 items-start justify-start ml-0.5 md:ml-[0] mt-4 w-[86%] md:w-full">
                  <Img
                    src="images/img_globe.svg"
                    className="h-[25px] mt-1 w-auto"
                    alt="globe"
                  />
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-[84%] sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    No 233 Main St. New York, United States
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-normal min-w-[191px] mt-8 not-italic text-base text-center text-orange_100 uppercase w-auto"
                  shape="RoundedBorder12"
                  size="md"
                  variant="Outline"
                >
                  Register
                </Button>
              </div>
              <div className="md:h-[29px] h-[47px] relative w-[9%] sm:w-full">
                <Text
                  className="absolute font-bold right-[0] text-gray_900 text-left top-[0] tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  20
                </Text>
                <Text
                  className="absolute bottom-[0] font-normal inset-x-[0] mx-auto not-italic text-gray_900 text-left uppercase w-max"
                  as="h6"
                  variant="h6"
                >
                  JULY
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
              <Img
                src="images/img_httpswwwpex_512x845.png"
                className="h-[512px] md:h-auto object-cover w-full"
                alt="httpswwwpex"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[11px] items-center justify-end ml-auto mt-12 w-[16%] md:w-full">
            <Text
              className="font-normal not-italic text-gray_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              View all Sermons
            </Text>
            <Img
              src="images/img_arrow.svg"
              className="h-0.5 w-auto"
              alt="arrow"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-7xl mt-[132px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[28%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
                as="h2"
                variant="h2"
              >
                View All Events
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-yellow_50 flex flex-1 flex-col justify-end pt-[22px] w-full">
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
                      100 random acts of kindness
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
            <div className="bg-yellow_50 flex flex-1 flex-col gap-[9px] justify-start p-[22px] sm:px-5 w-full">
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
                      Faith is a process, not a destination
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
            <div className="bg-yellow_50 flex flex-1 flex-col gap-[9px] justify-start p-[22px] sm:px-5 w-full">
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
                      there is nothing impossible
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
            <div className="bg-yellow_50 flex flex-1 flex-col gap-[9px] justify-start p-[22px] sm:px-5 w-full">
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
                      WATCH AND LISTEN TO OUR SERMONS
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

export default SermonsPage;

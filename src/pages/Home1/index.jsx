import React, { useState, useEffect } from "react";

import Header from "components/Header";
import { Img, Text, Button, List } from "components";
import HomeFooter from "components/HomeFooter";

const Home1Page = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    let data = Romcal.calendarFor(new Date().getFullYear());
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, "0");
    const day = String(today.getUTCDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}T00:00:00.000Z`;
    let filt = data.filter((item) => item.date === dateStr);
    setData(filt[0]);
  }, []);
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-robotocondensed items-center justify-start mx-auto w-full">
        <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[663px] md:px-5 relative w-full">
            <Img
              src="images/img_httpswwwpex.png"
              className="h-[663px] m-auto object-cover w-full"
              alt="httpswwwpex"
            />
            <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-2/5">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="font-bold text-left text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                  style={{
                    color: data?.data?.meta?.liturgicalColor?.value,
                  }}
                >
                  {data?.data?.season?.key}
                </Text>
                <Text
                  className="font-bold text-left text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                  style={{
                    color: data?.data?.meta?.liturgicalColor?.value,
                  }}
                >
                  {new Date(data?.date).toDateString()}
                </Text>
                <Text
                  className="font-bold text-left text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                  style={{
                    color: data?.data?.meta?.liturgicalColor?.value,
                  }}
                >
                  Week: {data?.data?.calendar?.week}
                </Text>
                <Text
                  className="font-bold text-left text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                  style={{
                    color: data?.data?.meta?.liturgicalColor?.value,
                  }}
                >
                  Day: {data?.data?.calendar?.day}
                </Text>
                <Text
                  className="leading-[82.00px] text-left text-white_A700 tracking-[-0.64px] uppercase w-full"
                  as="h1"
                  variant="h1"
                  style={{
                    color: data?.data?.meta?.liturgicalColor?.value,
                  }}
                >
                  {data?.name}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-7xl mt-[127px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[17px] items-center justify-start w-auto md:w-full">
            <Text
              className="font-normal not-italic text-center text-gray_900 uppercase w-auto"
              as="h6"
              variant="h6"
            >
              sub-headline
            </Text>
            <Text
              className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
              as="h2"
              variant="h2"
            >
              <>a church that&#39;s relevant</>
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-yellow_50 flex flex-1 flex-col md:gap-10 gap-16 items-center justify-end pt-20 w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start w-[62%] md:w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  size="smIcn"
                  variant="icbFillOrange100"
                >
                  <Img src="images/img_icon.svg" className="h-6" alt="icon" />
                </Button>
                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
                    as="h3"
                    variant="h3"
                  >
                    About us
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </div>
              </div>
              <div className="bg-orange_100 h-4 w-full"></div>
            </div>
            <div className="bg-yellow_50 flex flex-1 flex-col md:gap-10 gap-16 items-center justify-end pt-20 w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start w-[62%] md:w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  size="smIcn"
                  variant="icbFillOrange100"
                >
                  <Img
                    src="images/img_icon_gray_900.svg"
                    className="h-[26px]"
                    alt="icon"
                  />
                </Button>
                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Get involved
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </div>
              </div>
              <div className="bg-orange_100 h-4 w-full"></div>
            </div>
            <div className="bg-yellow_50 flex flex-1 flex-col md:gap-10 gap-16 items-center justify-end w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start mt-[79px] w-[62%] md:w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  size="smIcn"
                  variant="icbFillOrange100"
                >
                  <Img
                    src="images/img_icon_gray_900_48x48.svg"
                    className="h-[22px]"
                    alt="icon"
                  />
                </Button>
                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Giving back
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_900 text-left w-full"
                    as="h6"
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </div>
              </div>
              <div className="bg-orange_100 h-4 w-full"></div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-5xl mt-[127px] mx-auto md:px-5 w-full">
          <div className="h-[883px] relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-16px] mx-auto w-[83%] z-[1]">
              <div className="flex flex-col gap-[18px] items-center justify-start w-auto md:w-full">
                <Text
                  className="font-normal not-italic text-gray_900 text-left uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  SUB-HEADLINE
                </Text>
                <Text
                  className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
                  as="h2"
                  variant="h2"
                >
                  love and compassion
                </Text>
              </div>
              <Text
                className="font-normal leading-[24.00px] mt-9 not-italic text-center text-gray_900_a0 w-full"
                as="h6"
                variant="h6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
              <Button
                className="cursor-pointer font-normal min-w-[205px] mt-14 not-italic text-base text-center text-gray_900_01 uppercase w-auto"
                shape="RoundedBorder12"
                size="md"
                variant="FillOrange100"
              >
                Read more
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-between mt-auto mx-auto w-full">
              <Img
                src="images/img_httpswwwpex_384x293.png"
                className="md:flex-1 h-96 sm:h-auto object-cover rounded-[30px] w-auto md:w-full"
                alt="httpswwwpex_One"
              />
              <Img
                src="images/img_httpswwwpex_512x390.png"
                className="md:flex-1 h-[512px] sm:h-auto sm:mt-0 mt-16 object-cover rounded-[32px] w-auto md:w-full"
                alt="httpswwwpex_Two"
              />
              <Img
                src="images/img_httpswwwpex_1.png"
                className="md:flex-1 h-96 sm:h-auto object-cover rounded-[30px] w-auto md:w-full"
                alt="httpswwwpex_Three"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
            <Text
              className="font-normal not-italic text-center text-gray_900 uppercase w-auto"
              as="h6"
              variant="h6"
            >
              our mission & vision
            </Text>
            <Text
              className="mt-[18px] text-center text-gray_900 tracking-[-0.32px] uppercase w-auto"
              as="h3"
              variant="h3"
            >
              celebrate WITH US
            </Text>
            <Text
              className="font-normal leading-[24.00px] mt-[19px] not-italic text-center text-gray_900_a0 w-full"
              as="h6"
              variant="h6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <div className="flex flex-row font-roboto gap-1.5 items-center justify-center mt-[15px] w-[18%] md:w-full">
              <a
                href="javascript:"
                className="font-normal not-italic text-gray_900_02 text-left text-sm w-auto"
              >
                <Text className="">Read More</Text>
              </a>
              <Img
                src="images/img_arrowright.svg"
                className="h-2.5 w-auto"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray_100 flex flex-col md:gap-10 gap-16 items-center justify-center mt-[127px] p-[110px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-start mt-[17px] w-auto md:w-full">
            <Text
              className="font-normal not-italic text-center text-gray_900 uppercase w-auto"
              as="h6"
              variant="h6"
            >
              Watch and listen
            </Text>
            <Text
              className="leading-[64.00px] text-center text-gray_900 tracking-[-0.48px] uppercase w-full"
              as="h2"
              variant="h2"
            >
              THE benefits of joining our church
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-center justify-start max-w-7xl mb-[18px] mx-auto w-full">
            <div className="h-96 relative w-[24%] md:w-full">
              <Img
                src="images/img_httpswwwpex_384x302.png"
                className="h-96 m-auto object-cover w-full"
                alt="httpswwwpex_Four"
              />
              <div className="absolute bg-gradient  bottom-[0] flex flex-col gap-4 inset-x-[0] items-center justify-end mx-auto p-8 sm:px-5 w-full">
                <Text
                  className="font-bold mt-[101px] text-left text-white_A700 tracking-[-0.24px] uppercase w-full"
                  as="h4"
                  variant="h4"
                >
                  WATCH AND LISTEN TO OUR SERMONS
                </Text>
                <Text
                  className="font-normal leading-[24.00px] not-italic text-left text-white_A700_a0 w-full"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </Text>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
              orientation="horizontal"
            >
              <div className="h-96 relative w-full">
                <Img
                  src="images/img_httpswwwpex_2.png"
                  className="h-96 m-auto object-cover w-full"
                  alt="httpswwwpex"
                />
                <div className="absolute bg-gradient1  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-8 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[67px] text-left text-white_A700 tracking-[-0.24px] uppercase w-full"
                    as="h4"
                    variant="h4"
                  >
                    WATCH AND LISTEN TO OUR SERMONS
                  </Text>
                </div>
              </div>
              <div className="h-96 relative w-full">
                <Img
                  src="images/img_httpswwwpex_3.png"
                  className="h-96 m-auto object-cover w-full"
                  alt="httpswwwpex"
                />
                <div className="absolute bg-gradient1  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-8 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[67px] text-left text-white_A700 tracking-[-0.24px] uppercase w-full"
                    as="h4"
                    variant="h4"
                  >
                    WATCH AND LISTEN TO OUR SERMONS
                  </Text>
                </div>
              </div>
              <div className="h-96 relative w-full">
                <Img
                  src="images/img_httpswwwpex_4.png"
                  className="h-96 m-auto object-cover w-full"
                  alt="httpswwwpex"
                />
                <div className="absolute bg-gradient1  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-8 sm:px-5 w-full">
                  <Text
                    className="font-bold mt-[67px] text-left text-white_A700 tracking-[-0.24px] uppercase w-full"
                    as="h4"
                    variant="h4"
                  >
                    WATCH AND LISTEN TO OUR SERMONS
                  </Text>
                </div>
              </div>
            </List>
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
                alt="httpswwwpex_Five"
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
        <div className="flex flex-col items-center justify-start mt-[130px] w-full">
          <div className="h-[736px] md:h-[772px] md:px-5 relative w-full">
            <Img
              src="images/img_httpswwwpex_736x1500.png"
              className="h-[736px] m-auto object-cover w-full"
              alt="httpswwwpex_Six"
            />
            <div className="absolute bg-gradient3  flex flex-col h-full inset-[0] items-center justify-center m-auto p-32 md:px-10 sm:px-5 w-full">
              <div className="h-[480px] md:h-[516px] relative w-[62%] md:w-full">
                <div className="bg-white_A700 flex flex-col h-full items-center justify-end m-auto pt-[464px] w-full">
                  <div className="bg-orange_100 h-4 w-full"></div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-center m-auto w-[88%]">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                    <Text
                      className="leading-[64.00px] text-gray_900 text-left tracking-[-0.48px] uppercase w-full"
                      as="h2"
                      variant="h2"
                    >
                      We want to serve the world around us
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-[83%] sm:w-full"
                      as="h6"
                      variant="h6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[162px] not-italic text-base text-center text-gray_900_01 uppercase w-auto"
                      shape="RoundedBorder12"
                      size="md"
                      variant="FillOrange100"
                    >
                      Visit
                    </Button>
                  </div>
                  <Img
                    src="images/img_quoteicon.svg"
                    className="h-[140px] w-auto"
                    alt="quoteicon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start max-w-7xl mt-[127px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start w-auto md:w-full">
            <Text
              className="font-normal not-italic text-gray_900 text-left uppercase w-auto"
              as="h6"
              variant="h6"
            >
              Read our Blog
            </Text>
            <Text
              className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
              as="h2"
              variant="h2"
            >
              SHARE, INSPIRE, INNOVATE
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-yellow_50 flex flex-1 flex-col gap-[34px] items-center justify-end pt-[47px] w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                  variant="body1"
                >
                  Relationship
                </Text>
                <Text
                  className="font-bold mt-[15px] text-gray_900 text-left tracking-[-0.24px] uppercase w-[92%] sm:w-full"
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
                <Text
                  className="mt-[49px] not-italic text-gray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  By Mathew Johnson
                </Text>
                <Text
                  className="font-normal mt-[5px] not-italic text-gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Tuesday 13 May, 2021
                </Text>
              </div>
              <div className="bg-orange_100_01 h-4 w-full"></div>
            </div>
            <div className="bg-yellow_50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start my-4 w-auto md:w-full">
                <Text
                  className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                  variant="body1"
                >
                  Relationship
                </Text>
                <Text
                  className="font-bold mt-[15px] text-gray_900 text-left tracking-[-0.24px] uppercase w-[92%] sm:w-full"
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
                <Text
                  className="mt-[49px] not-italic text-gray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  By Mathew Johnson
                </Text>
                <Text
                  className="font-normal mt-[5px] not-italic text-gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Tuesday 13 May, 2021
                </Text>
              </div>
            </div>
            <div className="bg-yellow_50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start my-4 w-auto md:w-full">
                <Text
                  className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                  variant="body1"
                >
                  Relationship
                </Text>
                <Text
                  className="font-bold mt-[15px] text-gray_900 text-left tracking-[-0.24px] uppercase w-[92%] sm:w-full"
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
                <Text
                  className="mt-[49px] not-italic text-gray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  By Mathew Johnson
                </Text>
                <Text
                  className="font-normal mt-[5px] not-italic text-gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Tuesday 13 May, 2021
                </Text>
              </div>
            </div>
            <div className="bg-yellow_50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start my-4 w-auto md:w-full">
                <Text
                  className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
                  variant="body1"
                >
                  Relationship
                </Text>
                <Text
                  className="font-bold mt-[15px] text-gray_900 text-left tracking-[-0.24px] uppercase w-[92%] sm:w-full"
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
                <Text
                  className="mt-[49px] not-italic text-gray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  By Mathew Johnson
                </Text>
                <Text
                  className="font-normal mt-[5px] not-italic text-gray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Tuesday 13 May, 2021
                </Text>
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

export default Home1Page;

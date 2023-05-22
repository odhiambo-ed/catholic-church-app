import React from "react";

import Header from "components/Header";
import { Img, Text, List } from "components";
import HomeFooter from "components/HomeFooter";

const AboutusPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-robotocondensed items-center justify-start mx-auto w-full">
        <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[419px] md:px-5 relative w-full">
            <Img
              src="images/img_httpsunsplas.png"
              className="h-[419px] m-auto object-cover w-full"
              alt="httpsunsplas"
            />
            <div className="absolute flex flex-col gap-[18px] h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-auto">
              <Text
                className="font-bold text-gray_900 text-left uppercase w-auto"
                as="h6"
                variant="h6"
              >
                About us
              </Text>
              <Text
                className="text-gray_900 text-left tracking-[-0.48px] uppercase w-auto"
                as="h2"
                variant="h2"
              >
                Serving the world around us
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-5xl mt-[127px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] items-center justify-start w-auto md:w-full">
            <Text
              className="font-normal not-italic text-center text-gray_900 uppercase w-auto"
              as="h6"
              variant="h6"
            >
              Welcome to our CHURCH
            </Text>
            <Text
              className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
              as="h2"
              variant="h2"
            >
              Love and compassion
            </Text>
          </div>
          <Text
            className="font-normal leading-[24.00px] mt-9 not-italic text-center text-gray_900_a0 w-3/4 sm:w-full"
            as="h6"
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </Text>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-12 w-full">
            <Img
              src="images/img_httpswwwpex_384x293.png"
              className="md:flex-1 h-96 sm:h-auto object-cover rounded-[30px] w-auto md:w-full"
              alt="httpswwwpex"
            />
            <Img
              src="images/img_httpswwwpex_512x390.png"
              className="md:flex-1 h-[512px] sm:h-auto object-cover rounded-[32px] w-auto md:w-full"
              alt="httpswwwpex_One"
            />
            <Img
              src="images/img_httpswwwpex_1.png"
              className="md:flex-1 h-96 sm:h-auto object-cover rounded-[30px] w-auto md:w-full"
              alt="httpswwwpex_Two"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center mt-[63px] w-3/4 md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Text
                className="font-normal not-italic text-gray_900 text-left uppercase w-auto"
                as="h6"
                variant="h6"
              >
                OUR MISSIOn & Vision
              </Text>
              <Text
                className="leading-[44.00px] mt-4 text-gray_900 text-left tracking-[-0.32px] uppercase w-full"
                as="h3"
                variant="h3"
              >
                STRIVING FOR A BETTER TOMORROW
              </Text>
              <Text
                className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                as="h6"
                variant="h6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Text
                className="font-normal not-italic text-gray_900 text-left uppercase w-auto"
                as="h6"
                variant="h6"
              >
                WHAT WE DO
              </Text>
              <Text
                className="leading-[44.00px] mt-4 text-gray_900 text-left tracking-[-0.32px] uppercase w-full"
                as="h3"
                variant="h3"
              >
                BRINgING PEACE AND JOY TO THE WORLD
              </Text>
              <Text
                className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                as="h6"
                variant="h6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-5xl mt-[129px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] justify-start w-auto md:w-full">
            <Text
              className="font-normal md:ml-[0] ml-[175px] not-italic text-center text-gray_900 w-auto"
              as="h6"
              variant="h6"
            >
              BENEFITS{" "}
            </Text>
            <Text
              className="leading-[64.00px] text-center text-gray_900 tracking-[-0.48px] uppercase w-full"
              as="h2"
              variant="h2"
            >
              THE benefits of joining our church
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
                  as="h3"
                  variant="h3"
                >
                  find fulfillment and joy
                </Text>
                <Text
                  className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </Text>
              </div>
              <Img
                src="images/img_httpsunsplas_320x500.png"
                className="md:flex-1 h-80 sm:h-auto object-cover w-auto md:w-full"
                alt="httpsunsplas_One"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-full">
              <Img
                src="images/img_httpsunsplas_1.png"
                className="md:flex-1 h-80 sm:h-auto object-cover w-auto md:w-full"
                alt="httpsunsplas_Two"
              />
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
                  as="h3"
                  variant="h3"
                >
                  shared values
                </Text>
                <Text
                  className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
                  as="h3"
                  variant="h3"
                >
                  charity events
                </Text>
                <Text
                  className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </Text>
              </div>
              <Img
                src="images/img_httpsunsplas_2.png"
                className="md:flex-1 h-80 sm:h-auto object-cover w-auto md:w-full"
                alt="httpsunsplas_Three"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-full">
              <Img
                src="images/img_httpsunsplas_3.png"
                className="md:flex-1 h-80 sm:h-auto object-cover w-auto md:w-full"
                alt="httpsunsplas_Four"
              />
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
                  as="h3"
                  variant="h3"
                >
                  All are welcome
                </Text>
                <Text
                  className="font-normal leading-[24.00px] not-italic text-gray_900_a0 text-left w-full"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start max-w-7xl mt-[127px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] items-center justify-start w-auto md:w-full">
            <Text
              className="font-normal not-italic text-gray_900 text-left uppercase w-auto"
              as="h6"
              variant="h6"
            >
              church members
            </Text>
            <Text
              className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
              as="h2"
              variant="h2"
            >
              meet our Inspirational team
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-gray_100 flex flex-1 flex-col gap-6 items-center justify-start p-12 md:px-10 sm:px-5 w-full">
              <Img
                src="images/img_httpswwwpex_152x152.png"
                className="h-[152px] md:h-auto rounded-[50%] w-[152px]"
                alt="httpswwwpex"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-[56%] md:w-full">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  Kim Bowen
                </Text>
                <div className="flex flex-col gap-[18px] items-center justify-start w-4/5 md:w-full">
                  <Text
                    className="font-normal not-italic text-gray_900_99 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Pastor, Church
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-between w-[96%] md:w-full">
                    <Img
                      src="images/img_facebooknegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="facebooknegativ"
                    />
                    <Img
                      src="images/img_twitternegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="twitternegative"
                    />
                    <Img
                      src="images/img_linkedin_gray_900.svg"
                      className="h-4 w-4"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-1 flex-col gap-6 items-center justify-start p-12 md:px-10 sm:px-5 w-full">
              <Img
                src="images/img_httpswwwpex_5.png"
                className="h-[152px] md:h-auto rounded-[50%] w-[152px]"
                alt="httpswwwpex"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-[92%] md:w-full">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  Danielle Watkins
                </Text>
                <div className="flex flex-col gap-[18px] items-center justify-start w-[49%] md:w-full">
                  <Text
                    className="font-normal not-italic text-gray_900_99 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Pastor, Church
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-between w-[96%] md:w-full">
                    <Img
                      src="images/img_facebooknegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="facebooknegativ"
                    />
                    <Img
                      src="images/img_twitternegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="twitternegative"
                    />
                    <Img
                      src="images/img_linkedin_gray_900.svg"
                      className="h-4 w-4"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-1 flex-col gap-6 items-center justify-start p-12 md:px-10 sm:px-5 w-full">
              <Img
                src="images/img_image.png"
                className="h-[152px] md:h-auto rounded-[50%] w-[152px]"
                alt="image"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-[66%] md:w-full">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  Naomi Craig
                </Text>
                <div className="flex flex-col gap-[18px] items-center justify-start w-[69%] md:w-full">
                  <Text
                    className="font-normal not-italic text-gray_900_99 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Pastor, Church
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-between w-[96%] md:w-full">
                    <Img
                      src="images/img_facebooknegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="facebooknegativ"
                    />
                    <Img
                      src="images/img_twitternegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="twitternegative"
                    />
                    <Img
                      src="images/img_linkedin_gray_900.svg"
                      className="h-4 w-4"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-1 flex-col gap-6 items-center justify-start p-12 md:px-10 sm:px-5 w-full">
              <Img
                src="images/img_image_152x152.png"
                className="h-[152px] md:h-auto rounded-[50%] w-[152px]"
                alt="image"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-[73%] md:w-full">
                <Text
                  className="font-bold text-center text-gray_900 tracking-[-0.24px] uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  Santos Payne
                </Text>
                <div className="flex flex-col gap-[18px] items-center justify-start w-[62%] md:w-full">
                  <Text
                    className="font-normal not-italic text-gray_900_99 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Pastor, Church
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-between w-[96%] md:w-full">
                    <Img
                      src="images/img_facebooknegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="facebooknegativ"
                    />
                    <Img
                      src="images/img_twitternegative_gray_900.svg"
                      className="h-4 w-4"
                      alt="twitternegative"
                    />
                    <Img
                      src="images/img_linkedin_gray_900.svg"
                      className="h-4 w-4"
                      alt="linkedin"
                    />
                  </div>
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

export default AboutusPage;

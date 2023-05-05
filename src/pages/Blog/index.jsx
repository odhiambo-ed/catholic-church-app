import React from "react";

import Header from "components/Header";
import { Text, Img, Button } from "components";
import HomeFooter from "components/HomeFooter";

const BlogPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-robotocondensed items-center justify-start mx-auto w-full">
        <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start max-w-7xl mt-[127px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <Text
                className="font-normal not-italic text-gray_900 text-left uppercase w-auto"
                as="h6"
                variant="h6"
              >
                OUR BLOG
              </Text>
              <Text
                className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
                as="h2"
                variant="h2"
              >
                most recent post
              </Text>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-col flex-row gap-12 items-center justify-start p-14 md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <Img
                src="images/img_httpsunsplas_384x572.png"
                className="h-96 md:h-auto object-cover w-full"
                alt="httpsunsplas"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                  <Text
                    className="font-normal not-italic text-gray_900_a2 text-left uppercase w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Tuesday 13 May, 2022
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_900_a2 text-left uppercase w-auto"
                    as="h6"
                    variant="h6"
                  >
                    By John Hunau Deo
                  </Text>
                </div>
                <Text
                  className="leading-[44.00px] mt-[11px] text-gray_900 text-left tracking-[-0.32px] uppercase w-full"
                  as="h3"
                  variant="h3"
                >
                  Church was doing what he often did when dropped An oracle{" "}
                </Text>
                <Text
                  className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </Text>
                <Button
                  className="cursor-pointer font-normal min-w-[205px] mt-8 not-italic text-base text-center text-gray_900_01 uppercase w-auto"
                  shape="RoundedBorder12"
                  size="md"
                  variant="FillOrange100"
                >
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-7xl mt-[130px] mx-auto md:px-5 w-full">
          <Text
            className="text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
            as="h2"
            variant="h2"
          >
            ALL BLOG POSTS
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white_A700 flex flex-1 flex-col gap-[34px] items-center justify-end pt-[47px] w-full">
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
                      THE BEST WAY TO INSPIRE PEOPLE
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
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
                      Tuesday 13 May, 2018
                    </Text>
                  </div>
                  <div className="bg-orange_100_01 h-4 w-full"></div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
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
                      HOW TO SHOW COMPASSION
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
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
                      Tuesday 13 May, 2018
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
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
                      THE BIBLICAL PURPOSE OF MONEY
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
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
                      Tuesday 13 May, 2018
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
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
                      THE BEST WAY TO INSPIRE PEOPLE
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
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
                      Tuesday 13 May, 2018
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
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
                      WHAT IT MEANS TO BE A DISCIPLE
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      We both celebrate and challenge the culture around us as
                      we orient our lives around Jesus. We want
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
                      Tuesday 13 May, 2018
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
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
                      WHAT IT MEANS TO BELIEVE
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      We both celebrate and challenge the culture around us as
                      we orient our lives around Jesus. We want
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
                      Tuesday 13 May, 2018
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 w-full">
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
                      the modern chruch in 2022
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-4 not-italic text-gray_900_a0 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      We both celebrate and challenge the culture around us as
                      we orient our lives around Jesus. We want
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
                      Tuesday 13 May, 2018
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default BlogPage;

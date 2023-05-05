import React from "react";

import Header from "components/Header";
import { Text, Img, Line } from "components";
import HomeFooter from "components/HomeFooter";

const BlogPostPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-robotocondensed items-center justify-start mx-auto w-full">
        <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mt-[127px] md:px-5 w-[38%] md:w-full">
          <Text
            className="bg-clip-text bg-gradient2  font-bold text-left text-transparent tracking-[0.96px] uppercase w-auto"
            variant="body1"
          >
            Relationship
          </Text>
          <Text
            className="mt-[18px] text-center text-gray_900 tracking-[-0.48px] uppercase w-auto"
            as="h2"
            variant="h2"
          >
            HOW TO SHOW COMPASSION
          </Text>
          <div className="flex flex-row gap-[13px] items-center justify-center mt-[23px] w-[41%] md:w-full">
            <Text
              className="font-normal not-italic text-gray_900 text-left w-auto"
              as="h6"
              variant="h6"
            >
              13 May, 2018
            </Text>
            <Text
              className="font-normal not-italic text-gray_900 text-left w-auto"
              as="h6"
              variant="h6"
            >
              By Mathew Johnson
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-7xl mt-[65px] mx-auto md:px-5 w-full">
          <Img
            src="images/img_httpsunsplas_510x1280.png"
            className="h-[510px] md:h-auto object-cover w-full"
            alt="httpsunsplas"
          />
        </div>
        <div className="h-[1754px] sm:h-[1880px] md:h-[1948px] mt-[66px] md:px-5 relative w-[52%] md:w-full">
          <div className="flex flex-col h-full items-center justify-start mt-[349px] mx-auto w-full">
            <Img
              src="images/img_httpsunsplas_437x768.png"
              className="h-[437px] md:h-auto object-cover w-full"
              alt="httpsunsplas_One"
            />
          </div>
          <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
            <Text
              className="text-gray_900 text-left tracking-[-0.48px] uppercase w-auto"
              as="h2"
              variant="h2"
            >
              LOREM IPSUM DOLOR SIT AMET
            </Text>
            <Text
              className="leading-[24.00px] mt-7 not-italic text-gray_900_a0 text-left w-full"
              as="h5"
              variant="h5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Non tellus orci ac auctor augue mauris augue neque
              gravida.
            </Text>
            <Text
              className="leading-[24.00px] mt-6 not-italic text-gray_900_a0 text-left w-full"
              as="h5"
              variant="h5"
            >
              Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi
              porta lorem mollis aliquam. Quis vel eros donec ac odio tempor
              orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam
              at lectus urna duis convallis convallis tellus id. Feugiat pretium
              nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam
              lacus. Sit amet porttitor eget.
            </Text>
            <Text
              className="mt-[535px] text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
              as="h3"
              variant="h3"
            >
              LOREM IPSUM DOLOR SIT AMET
            </Text>
            <Text
              className="leading-[24.00px] mt-[27px] not-italic text-gray_900_a0 text-left w-full"
              as="h5"
              variant="h5"
            >
              Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi
              porta lorem mollis aliquam. Quis vel eros donec ac odio tempor
              orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam
              at lectus urna duis convallis convallis tellus id. Feugiat pretium
              nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam
              lacus. Sit amet porttitor eget.
            </Text>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-start mt-6 w-full">
              <Line className="bg-orange_100 h-[120px] md:h-[3px] w-[3px] md:w-full" />
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
              className="leading-[24.00px] mt-6 not-italic text-gray_900_a0 text-left w-full"
              as="h5"
              variant="h5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Non tellus orci ac auctor augue mauris augue neque
              gravida.
            </Text>
            <Text
              className="mt-[42px] text-gray_900 text-left tracking-[-0.32px] uppercase w-auto"
              as="h3"
              variant="h3"
            >
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR
            </Text>
            <Text
              className="leading-[24.00px] mt-[27px] not-italic text-gray_900_a0 text-left w-full"
              as="h5"
              variant="h5"
            >
              We both celebrate and challenge the culture around us as we orient
              our lives around Jesus. We want to serve the world around us. It’s
              why we support mission work all across the globe Regardless of
              what your next step in faith is, we want to help you take that
              next step Our church is10% of our annual income to
            </Text>
            <div className="flex flex-col items-center justify-start mt-[34px] w-[57%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start w-[89%] md:w-full">
                  <div className="bg-blue_gray_800 h-[5px] sm:mt-0 my-2 rounded-sm w-[5px]"></div>
                  <Text
                    className="not-italic text-gray_900_a0 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </Text>
                </div>
                <div className="flex flex-row gap-[19px] items-center justify-start mt-1.5 w-4/5 md:w-full">
                  <div className="bg-blue_gray_800 h-[5px] my-2 rounded-sm w-[5px]"></div>
                  <Text
                    className="not-italic text-gray_900_a0 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Purus sit amet luctus venenatis lectus magna
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start mt-[5px] w-full">
                  <div className="bg-blue_gray_800 h-[5px] sm:mt-0 my-2 rounded-sm w-[5px]"></div>
                  <Text
                    className="not-italic text-gray_900_a0 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Aenean vel elit scelerisque mauris. Imperdiet sed euismod
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="leading-[24.00px] mt-[31px] not-italic text-gray_900_a0 text-left w-full"
              as="h5"
              variant="h5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Non tellus orci ac auctor augue mauris augue neque
              gravida.
            </Text>
            <Text
              className="leading-[24.00px] mt-6 not-italic text-gray_900_a0 text-left w-full"
              as="h5"
              variant="h5"
            >
              Saepe magni aut maxime vel voluptatem. Ab eveniet neque placeat
              qui porro ab minus voluptas. Dicta praesentium neque vero mollitia
              aperiam sed enim. Lacinia quis vel eros donec ac odio.
            </Text>
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

export default BlogPostPage;

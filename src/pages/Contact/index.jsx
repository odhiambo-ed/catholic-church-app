import React from "react";

import Header from "components/Header";
import { Img, Text, Input, TextArea, Button } from "components";
import HomeFooter from "components/HomeFooter";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-robotocondensed items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="h-[483px] md:px-5 relative w-full">
            <Img
              src="images/img_httpsunsplas_483x1500.png"
              className="h-[483px] m-auto object-cover w-full"
              alt="httpsunsplas"
            />
            <div className="absolute flex flex-col gap-4 h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-auto">
              <Text
                className="font-normal not-italic text-left text-orange_100 uppercase w-auto"
                as="h6"
                variant="h6"
              >
                Contact
              </Text>
              <Text
                className="leading-[64.00px] text-left text-white_A700 tracking-[-0.48px] uppercase w-full"
                as="h2"
                variant="h2"
              >
                Get in touch with our CHURCH
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1015px] mt-[126px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[62%] md:w-full">
              <Text
                className="font-bold ml-0.5 md:ml-[0] text-gray_900_04 text-left tracking-[-0.24px] uppercase w-auto"
                as="h4"
                variant="h4"
              >
                Contact form:
              </Text>
              <Input
                wrapClassName="mt-8 w-full"
                className="font-normal not-italic p-0 placeholder:text-gray_900 text-base text-gray_900 text-left w-full"
                type="text"
                name="input"
                placeholder="Your full Name"
                shape="RoundedBorder4"
                size="sm"
                variant="FillWhiteA700"
              ></Input>
              <Input
                wrapClassName="mt-3 w-full"
                className="font-normal not-italic p-0 placeholder:text-gray_900 text-base text-gray_900 text-left w-full"
                type="email"
                name="input_One"
                placeholder="Your Email"
                shape="RoundedBorder4"
                size="sm"
                variant="FillWhiteA700"
              ></Input>
              <Input
                wrapClassName="mt-3 w-full"
                className="font-normal not-italic p-0 placeholder:text-gray_900 text-base text-gray_900 text-left w-full"
                name="input_Two"
                placeholder="Query Related"
                shape="RoundedBorder4"
                size="sm"
                variant="FillWhiteA700"
              ></Input>
              <TextArea
                className="font-normal gap-2.5 h-[120px] mt-3 not-italic text-base placeholder:text-gray_900 text-gray_900 text-left w-[624px]"
                name="input_Three"
                placeholder="Message"
                shape="RoundedBorder4"
                size="sm"
                variant="FillWhiteA700"
              ></TextArea>
              <Button
                className="cursor-pointer font-normal mt-3 not-italic text-base text-center text-gray_900_01 uppercase w-[624px]"
                shape="RoundedBorder12"
                size="md"
                variant="FillOrange100"
              >
                Send message
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[60px] w-[26%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                  <Text
                    className="not-italic text-gray_900_99_01 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.24px] uppercase"
                    as="h4"
                    variant="h4"
                  >
                    <>
                      NH 234 Public Square
                      <br />
                      San Francisco 65368
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[33px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="font-normal not-italic text-gray_900_99_01 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Contact Details
                  </Text>
                  <Text
                    className="font-bold mt-3 text-gray_900 text-left tracking-[-0.24px] uppercase w-auto"
                    as="h4"
                    variant="h4"
                  >
                    (480) 555-0103
                  </Text>
                  <Text
                    className="font-bold mt-[7px] text-gray_900 text-left tracking-[-0.24px] uppercase w-auto"
                    as="h4"
                    variant="h4"
                  >
                    finsweet@example.com
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-start justify-start mt-[31px] w-[54%] md:w-full">
                <Text
                  className="font-normal not-italic text-gray_900_99_01 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Find us here
                </Text>
                <div className="flex flex-row gap-8 items-center justify-between w-full">
                  <Img
                    src="images/img_facebooknegative_gray_900.svg"
                    className="h-[26px] w-[25px]"
                    alt="facebooknegativ"
                  />
                  <Img
                    src="images/img_twitternegative_gray_900.svg"
                    className="h-[26px] w-[26px]"
                    alt="twitternegative"
                  />
                  <Img
                    src="images/img_linkedin_gray_900.svg"
                    className="h-[26px] w-[25px]"
                    alt="linkedin"
                  />
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
      </div>
    </>
  );
};

export default ContactPage;

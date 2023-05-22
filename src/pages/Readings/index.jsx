import React, { useState, useEffect } from "react";

import Header from "components/Header";

const index = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:2321/readings")
      .then((res) => res.json())
      .then((final) => setData(final));
  }, []);

  return (
    <div>
      <Header className="bg-black_900 flex flex-row items-center justify-center md:px-5 w-full" />
      <div
        role="article"
        className="page-container node node--type-daily-reading node--promoted node--view-mode-full"
      >
        <div className="wr-block b-title-page padding-bottom-xxs to-center no-container">
          <div className="container">
            <div className="row">
              <div className="p-wrap">
                <div className="innerblock">
                  <h1 className="title-page">Daily Readings</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wr-block b-pager readings border-bottom  padding-top-xs bg-white no-container">
          <div className="container">
            <div className="row">
              <div className="p-wrap">
                <ul className="pager">
                  <li>
                    {/* <a href="https://bible.usccb.org//bible/readings/051023.cfm" className="prev" rel="prev" hrefLang="en">
                      May 10, 2023
                    </a> */}
                  </li>
                  <li className="current">
                    <time dateTime="2023-05-11">
                      {new Date().toDateString()}
                    </time>
                  </li>
                  <li>
                    {/* <a href="https://bible.usccb.org//bible/readings/051223.cfm" className="next" rel="next" hrefLang="en">
                      May 12, 2023
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="b-button-container to-center border-bottom  padding-top-xs bg-white wr-block">
          <div className="container">
            <div className="row">
              <div className="p-wrap col-lg-10 offset-lg-1">
                <div className="innerblock">
                  <ul>
                    {/* <li className="item">
                      <a
                        href="https://bible.usccb.org//podcasts/audio/daily-mass-reading-podcast-may-11-2023"
                        className="btn-icon icon-microphone transparent blue small"
                      >
                        LISTEN PODCAST
                      </a>
                    </li>
                    <li className="item">
                      <a
                        href="https://bible.usccb.org//podcasts/video/2023-05-11-reflection-288"
                        className="btn-icon icon-play transparent blue small"
                      >
                        VIEW REFLECTION VIDEO
                      </a>
                    </li>
                    <li className="item">
                      <a
                        href="https://bible.usccb.org/es/bible/lecturas/051123.cfm"
                        className="btn transparent blue small language-selector language-es"
                        hrefLang="es"
                      >
                        En Español
                      </a>
                    </li>
                    <li className="item">
                      <a
                        href="https://bible.usccb.org//readings/calendar"
                        className="btn transparent blue small"
                      >
                        View Calendar
                      </a>
                    </li>
                    <li className="item">
                      <a
                        href="https://bible.usccb.org/#subscribe"
                        className="btn-icon icon-email transparent blue small"
                      >
                        Get Daily Readings E-mails
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wr-block b-lectionary padding-top-s padding-bottom-xxs bg-white">
          <div className="container">
            <div className="row">
              <div className="p-wrap col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
                <div className="innerblock">
                  <h2>{data?.data?.header}</h2>
                  <p>Lectionary: {data?.data?.lectionary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {data?.data?.readings?.map((item, index) => {
          return (
            <div
              key={index}
              className="wr-block b-verse bg-white padding-bottom-m"
            >
              <div className="container">
                <div className="row">
                  <div className="p-wrap col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
                    <div className="innerblock">
                      <div className="content-header">
                        <h3 className="name">{item?.header}</h3>
                        <div className="address">
                          <a href="https://bible.usccb.org/bible/acts/15?7 ">
                            {item?.reference}
                          </a>
                        </div>
                      </div>
                      <div className="content-body">
                        {item?.nonFormattedText}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="wr-block b-button-container social padding-top-m bg-white">
          <div className="container">
            <div className="row">
              <div className="p-wrap col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
                <div className="innerblock">
                  <div className="addthis_inline_share_toolbox"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wr-block b-pager readings border-top bg-white padding-top-xs padding-bottom-l no-container">
          <div className="container">
            <div className="row">
              <div className="p-wrap">
                <ul className="pager">
                  <li>
                    {/* <a href="" className="prev" rel="prev" hrefLang="en">
                      May 10, 2023
                    </a> */}
                  </li>
                  <li className="current">
                    <time dateTime="2023-05-11">
                      {new Date().toDateString()}
                    </time>
                  </li>
                  <li>
                    {/* <a href="" className="next" rel="next" hrefLang="en">
                      May 12, 2023
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

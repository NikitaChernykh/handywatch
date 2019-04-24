import React from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import QuestionCard from "./QuestionCard";

import Flip from "react-reveal/Flip";
class Faq extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HANDY.WATCH - FAQ</title>
        </Helmet>
        <section className="faq-grid wrapper">
          <h1>Frequntly Asked Questions</h1>
          <Tabs>
            <TabList className="tabs">
              <Tab data-gtm="tab-payment">PAYMENTS</Tab>
              <Tab data-gtm="tab-installing">INSTALLING</Tab>
            </TabList>
            <TabPanel>
              <div>
                <Flip top>
                  <QuestionCard
                    question="How do I pay?"
                    anchor="howtopay"
                    answer={() => {
                      return (
                        <p>
                          Install the clock face that you like. Wait for the
                          screen with the code to show up. Follow the URL
                          dispalyed above the code or just enter the code{" "}
                          <a
                            className="faqlink"
                            href="https://k-pay.io/code/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtm="look-up-code"
                          >
                            here
                          </a>
                          . After the purchase you will recive an email
                          confiration and the clock face will be unlocked for
                          you to use.
                        </p>
                      );
                    }}
                  />
                </Flip>
                <Flip top>
                  <QuestionCard
                    question="I already paid, but I'm being asked to pay again?"
                    anchor="alreadypaid"
                    answer={() => {
                      return (
                        <p>
                          Everytime you change the clock face Fitbit treats it
                          as new one. That can also happen sometimes if you
                          reboot you device or loose the connection for too
                          long. To prove your purchase and unlock it back{" "}
                          <a
                            className="faqlink"
                            href="https://k-pay.io/code/unlock"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtm="unlock-code"
                          >
                            here
                          </a>
                          . Just use the same email as when you purchased it
                          before and the code that you see on the watch.
                        </p>
                      );
                    }}
                  />
                </Flip>
                <Flip top>
                  <QuestionCard
                    question="I purchased a Bundle. How do I access all the clock faces from there?"
                    anchor="bundle"
                    answer={() => {
                      return (
                        <p>
                          If you purchased Bundle you should recive the email
                          with links to clock faces. To install just open the
                          links on trough your phone and it will forward you to
                          fitbit app and install them. In case if you see the
                          code on the clock watch that you already purchsed. The
                          way Fitbit is handalining that for now is not the best
                          so to get rid of the code screen go to this page and
                          enter that code{` `}
                          <a
                            className="faqlink"
                            href="https://k-pay.io/code/unlock"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtm="bundle-code"
                          >
                            here
                          </a>
                          {` `}
                          and your email and it should unlock it for you.
                        </p>
                      );
                    }}
                  />
                </Flip>
                <Flip top>
                  <QuestionCard
                    question="How can I find what I purchased?"
                    anchor="lookup"
                    answer={() => {
                      return (
                        <p>
                          After each purchase, you receive a "Purchase Success"
                          e-mail from K-pay. This e-mail shows you exactly what
                          you purchased and how you can install those apps. In
                          case you lost those e-mails, you can lookup your
                          purchases {` `}
                          <a
                            className="faqlink"
                            href="https://k-pay.io/lookup"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtm="purchaseHistory-code"
                          >
                            here
                          </a>
                          .
                        </p>
                      );
                    }}
                  />
                </Flip>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <Flip top>
                  <QuestionCard
                    question="How do I change to 24 or 12 hour clock?"
                    anchor="militarytime"
                    answer={() => {
                      return (
                        <p>
                          <ul>
                            <li>
                              1) Log into your{" "}
                              <a
                                className="faqlink"
                                href="https://k-pay.io/code/unlock"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-gtm="change-time"
                              >
                                fitbit.com
                              </a>{" "}
                              dashboard and click the gear icon.
                            </li>
                            <li>2) Choose Settings > Personal Info.</li>
                            <li>
                              3) Under Advanced Settings, find Clock Display
                              Time and select whether you want the time shown in
                              12-hour or 24-hour clock units.
                            </li>
                            <li>4) Click Submit and sync your device.</li>
                          </ul>
                        </p>
                      );
                    }}
                  />
                </Flip>
                <Flip top>
                  <QuestionCard
                    question="I see 'Clock Error' on the screen."
                    anchor="clockerror"
                    answer={() => {
                      return (
                        <p>
                          That can happen if instalaltion of the clock face was
                          interapped in some way. Try restarting your watch by
                          pressing left button and bottom right button as the
                          same time and holding it untill screen shows you
                          Fitbit logo.
                        </p>
                      );
                    }}
                  />
                </Flip>
                <Flip top>
                  <QuestionCard
                    question="Clock face error, choose another."
                    anchor="clockerror2"
                    answer={() => {
                      return (
                        <p>
                          This can happen if your watch is not updated to the
                          latest Version. Go inside the Fitbit app and check if
                          you can install an update. If that doesn't help try to
                          force restart your watch by pressing left button and
                          bottom right button as the same time and holding it
                          untill screen shows you Fitbit logo. Sometimes even
                          after doing all this steps the error will not go away.
                          That is because some updates from Fitbit roll out to
                          small portions of useres at the time. It's possible
                          that your watch didn't revieve it yet.
                        </p>
                      );
                    }}
                  />
                </Flip>
              </div>
            </TabPanel>
          </Tabs>
        </section>
      </div>
    );
  }
}

export default Faq;

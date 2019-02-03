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
                    answer={() => {
                      return (
                        <p>
                          Install the clock face that you like. Wait for the
                          screen with the code to show up. Follow the URL
                          dispalyed above the code or just enter the code
                          following{" "}
                          <a
                            className="faqlink"
                            href="https://k-pay.io/code/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtm="look-up-code"
                          >
                            (this)
                          </a>{" "}
                          link. After the purchase you will recive an email
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
                    answer={() => {
                      return (
                        <p>
                          Everytime you change the clock face Fitbit treats it
                          as new one. That can also happen sometimes if you
                          reboot you device or loose the connection for too
                          long. To prove your purchase and unlock it back
                          following{" "}
                          <a
                            className="faqlink"
                            href="https://k-pay.io/code/unlock"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtm="unlock-code"
                          >
                            (this)
                          </a>{" "}
                          link. Just use the same email as when you purchased it
                          before and the code that you see on the watch.
                        </p>
                      );
                    }}
                  />
                </Flip>
                <Flip top>
                  <QuestionCard
                    question="How do I know which clock faces I purchased? Deleted, lost confirmation."
                    answer={() => {
                      return (
                        <p>
                          Follow{" "}
                          <a
                            className="faqlink"
                            href="https://k-pay.io/code/unlock"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtm="unlock-code"
                          >
                            (this)
                          </a>{" "}
                          link to see your purchase history and resend
                          confirmation emails. Use the same email as when you
                          made your purchases. Follow the instruction on the
                          page there.
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
                    question="I see 'Clock Error' on the screen."
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

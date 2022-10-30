import React from "react";
import "./Feedbox.css";

// import BubbleChartIcon from "@mui/icons-material/BubbleChart ";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useState } from "react";

const Feedbox = () => {
  const [tweetText, settweetText] = useState("");
  const [tweetImg, settweetImg] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    settweetText("");
    settweetImg("");
  };

  return (
    <div className="feedbox">
      <div className="feedbox_header">
        <h2>Home</h2>
        {/* <BubbleChartIcon /> */}
      </div>
      <div className="feedbox_body">
        <form>
          <div className="feedbox_input">
            <Avatar className="avatar" src="https://i.pravatar.cc/150?img=2" />
            <div className="feedbox_input_fields">
              <input
                placeholder="what's good?"
                onChange={(e) => {
                  settweetText(e.target.value);
                }}
                value={tweetText}
              />

              <input
                placeholder="Image Url? (optional)"
                className="tweet_img_input"
                onChange={(e) => {
                  settweetImg(e.target.value);
                }}
                value={tweetImg}
              />

              <div className="feedbox_submit">
                <Button className="Button_Submit" onSubmit={submitForm}>
                  Tweet
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedbox;

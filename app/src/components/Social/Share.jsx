import React from "react";
import Popup from "../Popup";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";

export default function Share({ heading, style }) {
  return (
    <div className="hidden">
      <Popup
        heading={heading}
        style={style}
        content={
          <div>
            <EmailShareButton subject="BringTheLight" body="Ovo je test." />
          </div>
        }
      />
    </div>
  );
}

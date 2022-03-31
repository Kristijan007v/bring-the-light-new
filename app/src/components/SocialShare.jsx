import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import Backdrop from "./Backdrop";
import Popup from "./Popup";

export default function SocialShare({ closeSocial }) {
  return (
    <>
      <Popup
        closePopup={closeSocial}
        heading={"Share on Social Media"}
        content={
          <div className="flex flex-row items-center justify-center space-x-2 p-4">
            <FacebookShareButton
              quote="20.456 People have brought the light to UA. Join them."
              hashtag="#ukraine"
              url="https://bringthelightua.web.app"
            >
              <FacebookIcon />
            </FacebookShareButton>
            <WhatsappShareButton
              quote="20.456 People have brought the light to UA. Join them."
              hashtag="#ukraine"
              url="https://bringthelightua.web.app"
            >
              <WhatsappIcon />
            </WhatsappShareButton>
            <TwitterShareButton
              quote="20.456 People have brought the light to UA. Join them."
              hashtag="#ukraine"
              url="https://bringthelightua.web.app"
            >
              <TwitterIcon />
            </TwitterShareButton>
            <TelegramShareButton
              quote="20.456 People have brought the light to UA. Join them."
              hashtag="#ukraine"
              url="https://bringthelightua.web.app"
            >
              <TelegramIcon />
            </TelegramShareButton>
            <ViberShareButton
              quote="20.456 People have brought the light to UA. Join them."
              hashtag="#ukraine"
              url="https://bringthelightua.web.app"
            >
              <ViberIcon />
            </ViberShareButton>
            {/* <EmailShareButton
              quote="20.456 People have brought the light to UA. Join them."
              hashtag="#ukraine"
              url="https://bringthelightua.web.app"
            >
              <EmailIcon />
            </EmailShareButton> */}
          </div>
        }
      />
    </>
  );
}

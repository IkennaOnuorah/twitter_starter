import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";
import { useEffect } from "react";

export default function Feed({
  tweets,
  setTweets,
  userProfile,
  tweetText,
  setTweetText,
}) {
  // useEffect(() => {
  //   console.log(tweets);
  // }, []);
  return (
    <div className="col feed">
      {
        <TweetBox
          tweetText={tweetText}
          setTweetText={setTweetText}
          tweets={tweets}
          setTweets={setTweets}
          userProfile={userProfile}
        />
      }
      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {tweets.map((tweet, idx) => {
          return <Tweet tweet={tweet} key={idx} />;
        })}
      </div>
    </div>
  );
}
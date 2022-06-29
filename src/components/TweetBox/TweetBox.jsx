import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox({
  tweets,
  setTweets,
  userProfile,
  tweetLength,
  tweetText,
  setTweetText,
}) {
  function handleOnTweetTextChange(changeEvent) {
    setTweetText(changeEvent.target.value); // important stuff, make sure to review later
  }

  function handleOnSubmit() {
    const newTweet = {
      id: tweets.length,
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    };

    userProfile.numTweets += 1;
    setTweets([...tweets, newTweet]);
    setTweetText("");
  }
  return (
    <div className="tweet-box">
      <TweetInput
        value={tweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount
          tweetTextLength={tweetText.length}
          inputLengthEqualZero={tweetText.length === 0}
        />
        <TweetSubmitButton
          handleOnSubmit={handleOnSubmit}
          tweetTextLength={tweetText.length}
          deactivate={tweetText.length == 0 || tweetText.length > 140}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount({ tweetTextLength, inputLengthEqualZero }) {
  // ADD CODE HERE
  return inputLengthEqualZero ? null : (
    <span
      className="tweet-length"
      style={{ color: tweetTextLength > 140 ? "red" : "black" }}
    >
      {140 - tweetTextLength}
    </span>
  );
}

export function TweetSubmitButton({ handleOnSubmit, deactivate }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        className="tweet-submit-button"
        onClick={handleOnSubmit}
        disabled={deactivate}
      >
        Tweet
      </button>
    </div>
  );
}
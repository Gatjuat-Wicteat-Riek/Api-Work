import React from "react";
import { UserContext, UserChannel } from "./App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          <div>User context value {user}</div>;
        }}
      </UserContext.Consumer>
      <UserChannel.Consumer>
        {(channel) => {
          <div>This is a second to the word {channel}</div>;
        }}
      </UserChannel.Consumer>
    </div>
  );
}

export default ComponentF;

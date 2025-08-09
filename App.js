import React from "react";
import VideoCallWithAR from "./components/VideoCallWithAR";
import StatusBar from "./components/StatusBar";
import Stories from "./components/Stories";
import Channels from "./components/Channels";
import StickerStore from "./components/StickerStore";
import ContactSync from "./components/ContactSync";
import InviteFriends from "./components/InviteFriends";
import AdBanner from "./components/AdBanner";
function App() {
  return (
    <div>
      <StatusBar userId="currentUserId" />
      <Stories userId="currentUserId" />
      <Channels />
      <StickerStore />
      <AdBanner />
      <VideoCallWithAR peerId="peerId" />
      <ContactSync />
      <InviteFriends />
    </div>
  );
}
export default App;
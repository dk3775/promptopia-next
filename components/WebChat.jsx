"use client";

import React, { useCallback, useState } from "react";
import { WebChatContainer } from "@ibm-watson/assistant-web-chat-react";

const webChatOptions = {
  integrationID: "52537a38-e9a3-4a28-8926-c443379124b5", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "eac304c8-961f-4f75-a6b5-523af098fd0f", // The ID of your service instance.
};

export default function WebChat() {
  const [instance, setInstance] = useState(null);

  const toggleWebChat = useCallback(() => {
    instance.toggleOpen();
  }, [instance]);

  return (
    <>
      {instance && (
        <button type="button" onClick={toggleWebChat}>
          Toggle web chat
        </button>
      )}
      <WebChatContainer
        config={webChatOptions}
        onBeforeRender={(instance) => onBeforeRender(instance, setInstance)}
      />
    </>
  );
}

function onBeforeRender(instance, setInstance) {
  // Make the instance available to the React components.
  setInstance(instance);

  // Do any other work you might want to do before rendering. If you don't need any other work here, you can just use
  // onBeforeRender={setInstance} in the component above.
}
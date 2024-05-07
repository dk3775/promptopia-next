import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import WebChat from "@components/WebChat";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
      <WebChat />
    </body>
  </html>
);

export default RootLayout;

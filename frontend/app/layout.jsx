// app/layout.jsx
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ShadowSlaveChatbot from "../components/chat"; // Make sure this path is correct

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ShadowSlaveChatbot />
      </body>
    </html>
  );
}
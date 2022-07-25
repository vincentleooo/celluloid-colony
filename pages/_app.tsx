import "antd/dist/antd.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between text-yellow-100 backdrop-blur-sm bg-gray-900 bg-opacity-40">
      <div className="sticky top-0 z-50">
        <div className="bg-opacity-20 backdrop-blur-md shadow-lg">
          <div className="w-11/12 lg:max-w-screen-lg mx-auto">
            <Header></Header>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:max-w-screen-lg mx-auto">
        <Component {...pageProps} />
      </div>
      <div><Footer></Footer></div>
    </div>
  );
}

export default MyApp;

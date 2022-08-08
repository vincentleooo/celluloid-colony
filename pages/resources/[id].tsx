/* eslint-disable @next/next/no-img-element */
// pages/posts/[id].js
import Link from "next/link";
import dataJson from "../../components/data/data.json";
import Image from "next/future/image"
import Head from "next/head";

type paramsDataID = {
  id: string;
};

type paramsData = {
  params: paramsDataID;
};

const paths = dataJson.map((e) => ({ params: { id: e.path } }));

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: paramsData) {
  const data = dataJson.filter((d) => d.path === context.params.id);
  return {
    // Passed to the page component as props
    props: {
      title: data[0].title,
      url: data[0].url,
      chapter: data[0].chapter,
      attachment: data[0].Attachments ? data[0].Attachments : "",
    },
  };
}

type postProps = {
  title: string;
  url: string;
  chapter: number;
  attachment: string;
  video?: string;
};

export default function Post(props: postProps) {
  // Render post...
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>
          {props.title}
        </title>
        <meta
          name="description"
          content={props.title}
        />
        <meta
          name="og:image"
          content="https://i.ibb.co/Q7gZjbZ/og-image.webp"
        />
        <meta
          name="og:description"
          content={props.title}
        />
      </Head>
    <div className="max-w-prose mx-auto my-12">
      <div className="max-w-prose mx-auto">
      <h1 className="font-bold text-3xl text-center mb-1 mx-auto">{props.title}</h1>
      </div>
      <p className="text-center max-w-prose mx-auto">Chapter {props.chapter.toString()}</p>
      {props.attachment ? (
        <Image className="mx-auto my-6 w-full h-full" src={props.attachment} alt="" />
      ) : (
        <></>
      )}
      {props.url ? (
        <>
          <div className="my-6 max-w-prose mx-auto">
            Here is the{" "}
            <Link href={props.url}>
              <a className="text-yellow-500 hover:text-yellow-700">link</a>
            </Link>{" "}
            if the frame below does not show.
          </div>
          <iframe className="w-full h-96 mx-auto my-3" src={props.url} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </>
      ) : (
        <></>
      )}
      {props.video ? (
        <>
          <video
            className="w-full h-96 mx-auto my-6"
            controls
          >
            <source src={props.video} type="video/webm" />
            <p>Your browser does not support HTML5 video. Here is
     a <Link href={props.video}><a href="">link to the video</a></Link> instead.</p>
          </video>
        </>
      ) : (
        <></>
      )}
    </div></>
  );
}

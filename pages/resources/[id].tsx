/* eslint-disable @next/next/no-img-element */
// pages/posts/[id].js
import dataJson from "../../components/data/data.json";

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
    props: { title: data[0].title, url: data[0].url, chapter: data[0].chapter, attachment: data[0].Attachments ? data[0].Attachments : "" },
  };
}

type postProps = {
  title: string;
  url: string;
  chapter: number;
  attachment: string;
}

export default function Post(props: postProps) {

  // Render post...
  return (
    <div className="max-w-prose mx-auto my-12">
      <h1 className="font-bold text-3xl text-center mb-1">{props.title}</h1>
      <p className="text-center">Chapter {props.chapter.toString()}</p>
      {props.attachment ? <img className="mx-auto my-6"src={props.attachment} alt="" /> : <></>}
      {props.url ? <iframe className="w-full h-96 mx-auto my-6" src={props.url}></iframe> : <></>}
    </div>
  );
}

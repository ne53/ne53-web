import Header from "../../header";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/microcms";

export const revalidate = 60;

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  const eyecatchUrl = post.eyecatch?.url;

  return (
    <div>
      <Header />
      <div className="prose mx-auto">
        <h1>{post.title}</h1>
        {eyecatchUrl && (
          <img src={eyecatchUrl} className="rounded-xl" alt="Eyecatch" />
        )}
        <div>{parse(post.content)}</div>
      </div>
    </div>
  );
}

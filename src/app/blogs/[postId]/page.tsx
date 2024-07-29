import Header from "../../header";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/microcms";

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
  
  return (
    <div>
      <Header />
      <div className="prose mx-auto">
        <h1>{post.title}</h1>
        {post.eyecatch && post.eyecatch.url ? (
                    <img src={post.eyecatch.url} className="rounded-xl" alt={post.title} />
                  ) : (
                    <div className="rounded-xl bg-gray-200 h-48 w-full" />
                  )}
        <div>{parse(post.content)}</div>
      </div>
    </div>
  );
}

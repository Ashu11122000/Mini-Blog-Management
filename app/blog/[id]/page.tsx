import { notFound } from "next/navigation";
import { getPostById } from "../../services/postService";

interface BlogPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogPostPage({
    params,
}: BlogPostPageProps) {
    const { id } = await params;

    const post = await getPostById(Number(id));

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto py-10">
            <h1 className="text-5xl font-bold mb-4">
                {post.title}
            </h1>

            <p className="text-gray-500 mb-6">
                {post.author} • {post.createdAt}
            </p>

            <div className="prose max-w-none">
                <p>{post.content}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
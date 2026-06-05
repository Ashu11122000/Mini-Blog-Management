// app/dashboard/comments/page.tsx

import CommentList from "../../components/comments/CommentList";
import { getAllComments } from "../../services/commentService";

export default function CommentsPage() {
    const comments = getAllComments();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Comments Management</h1>

            <CommentList comments={comments} />
        </div>
  );
}
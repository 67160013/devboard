import CommentList from "./CommentList";
import { useState } from "react";

function PostCard({ post, isFavorite, onToggleFavorite }) {
  const [showComments, setShowComments] = useState(false); // ✅ อยู่ตรงนี้

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <button onClick={onToggleFavorite}>
        {isFavorite ? "💔 ยกเลิก" : "❤️ ถูกใจ"}
      </button>

      <button
        onClick={() => setShowComments(!showComments)}
        style={{ marginLeft: "10px" }}
      >
        💬 {showComments ? "ซ่อนความคิดเห็น" : "ดูความคิดเห็น"}
      </button>

      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;

function PostCard({ post, isFavorite, onToggleFavorite }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <button onClick={onToggleFavorite}>
        {isFavorite ? "💔 ยกเลิก" : "❤️ ถูกใจ"}
      </button>
    </div>
  );
}

export default PostCard;

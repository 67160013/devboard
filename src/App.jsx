import { useState } from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import UserCard from "./components/UserCard";
// import AddPostForm from "./components/AddPostForm"; // ❌ ยังไม่ใช้ตอนนี้

const USERS = [
  { id: 1, name: "สมชาย ใจดี", email: "somchai@dev.com" },
  { id: 2, name: "สมหญิง รักเรียน", email: "somying@dev.com" },
  { id: 3, name: "วิชาญ โค้ดเก่ง", email: "wichan@dev.com" },
];

function App() {
  const [favorites, setFavorites] = useState([]);

  // Toggle ถูกใจ/ยกเลิก
  function handleToggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  }

  return (
    <div>
      <Navbar favoriteCount={favorites.length} />

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
        }}
      >
        {/* คอลัมน์ซ้าย */}
        <div>
          {/* ❌ ปิดไปก่อน เพราะตอนนี้ใช้ API */}
          {/* <AddPostForm onAddPost={handleAddPost} /> */}

          <PostList
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        {/* คอลัมน์ขวา */}
        <div>
          <h2
            style={{
              color: "#2d3748",
              borderBottom: "2px solid #1e40af",
              paddingBottom: "0.5rem",
            }}
          >
            สมาชิก
          </h2>

          {USERS.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

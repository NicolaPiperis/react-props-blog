import React from 'react';
import style from "../css/modules/SquareMain.module.css";
import { posts } from "../posts.js";

const defaultImg = "/mac_entra.png";

function TagsList({ tags }) {
  const tagsColorsMap = {
    'html': 'bg-amber-600',
    'css': 'bg-red-500',
    'js': 'bg-yellow-500',
    'php': 'bg-violet-500',
  };

  return tags.map((tag, i) => {
    const color = tagsColorsMap[tag] ?? "bg-gray-100";

    return (
      <span key={"tag_" + i}
        className={"rounded-lg px-2 text-xs " + color}>
        {tag}
      </span>
    );
  });
}

export default function TheMain() {
  return (
    <main className="bg-gray-200 max-h-full pb-40 flex items-center justify-center flex-wrap gap-5">
      {posts
        .filter(post => post.published)
        .map((post, i) => (
          <div key={i} className={style.square}>
            <div className="h-3/5 bg-gray-400 rounded-t-3xl flex justify-center">
              <img className="max-w-full max-h-full" src={post.image || defaultImg} alt={`Post ${i}`} />
            </div>

            <div>
              <h3 className="p-1 font-semibold">{post.title}</h3>
              <p className="p-1">{post.content}</p>
              <TagsList tags={post.tags} />
            </div>
          </div>
        ))}
    </main>
  );
}

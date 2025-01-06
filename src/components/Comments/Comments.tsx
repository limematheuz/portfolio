import { useEffect } from "react";
import { useComment } from "../../Context/CommentContext";
import "./Comments.css";

export default function Comments() {
  const { comments, getComments } = useComment();

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section className="comments-section">
      <h2>Comments</h2>
    <div className="comments-container-slider">
      {comments.map((comment, id) => (
        <div key={id} className="comment-card">
          <p>{comment.user_name}</p>
          <h3>{comment.title}</h3>
          <p>{comment.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

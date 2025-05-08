import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./likeButton.module.css";
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const onLiked = () => {
    setLiked(!liked);
  };
  return (
    <>
      <div>
        <button className={liked ? styles.btnLiked : styles.btn} onClick={onLiked}>
          <i className="bi bi-heart-fill" style={{color: liked ? "white" : "red"}}></i> Like
        </button>
      </div>
    </>
  );
};

export default LikeButton;

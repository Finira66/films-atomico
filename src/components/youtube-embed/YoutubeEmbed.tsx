import {FC} from "react";
import styles from "./YoutubeEmbed.module.scss";

interface YoutubeEmbedProps {
  embedLink: string;
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({embedLink}) => {
  return (
    <div className={styles.video}>
      <iframe
        width="100%"
        height="auto"
        src={embedLink}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;

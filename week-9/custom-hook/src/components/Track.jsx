import { memo } from "react";

const Track = memo(({ todo }) => {
    return <div>{todo}</div>;
  });

export default Track;
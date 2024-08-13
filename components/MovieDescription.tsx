import Skeleton from "./Skeleton";
import "./MovieDescription.css";

export default function MovieDescription({
  isError,
  isLoading,
  desc,
}: {
  isError: boolean;
  isLoading: boolean;
  desc?: string;
}) {
  if (isLoading) {
    return (
      <div className="description-skeletons">
        <Skeleton height="15px" width="95%" borderRadius="2px" />
        <Skeleton height="15px" width="95%" borderRadius="2px" />
        <Skeleton height="15px" width="50%" borderRadius="2px" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="movie-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        eligendi accusantium officiis laborum obcaecati saepe assumenda error
        nam aperiam inventore, eos labore qui temporibus accusamus adipisci
        explicabo ullam molestias facilis?
      </div>
    );
  }

  return <div className="movie-desc">{desc}</div>;
}

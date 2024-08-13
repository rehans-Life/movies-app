import "./Skeleton.css";

export default function Skeleton({
  width,
  height,
  borderRadius,
}: {
  width?: string;
  height?: string;
  borderRadius?: string;
}) {
  return (
    <div
      className="skeleton"
      style={{
        width,
        borderRadius,
        height,
      }}
    ></div>
  );
}

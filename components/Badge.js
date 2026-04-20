export default function Badge({ label, color = "indigo" }) {
  const styles = color === "indigo"
    ? "bg-indigo-100 text-indigo-700"
    : "bg-gray-100 text-gray-600";
  return (
    <span className={`${styles} text-xs font-semibold px-2 py-1 rounded-full`}>
      {label}
    </span>
  );
}
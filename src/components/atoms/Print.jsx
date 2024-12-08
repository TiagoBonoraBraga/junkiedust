export function Print({ children }) {
  return (
    <pre className="text-purple-200">{JSON.stringify(children, null, 4)}</pre>
  );
}

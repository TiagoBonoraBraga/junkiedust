export function Print({ children }) {
    return (
        <pre className="relative float-right">{JSON.stringify(children, null, 4)}</pre>
    )
}

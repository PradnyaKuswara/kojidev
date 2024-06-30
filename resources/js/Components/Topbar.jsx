export default function Topbar({ children, auth }) {
    return (
        <div className="p-8 sticky  my-4 rounded-lg bg-base-200">
            {children}
        </div>
    );
}

export default function Topbar({ children, auth }) {
    return (
        <div className="p-8 sticky mx-4 my-4 rounded-lg bg-base-200">
            {children}
        </div>
    );
}

import { AccountCircle } from "@mui/icons-material";

export default Navigation = () => {
    return (
        <nav className="flex justify-around items-center bg-neutral-800 text-neutral-50 py-4 text-center">
            <div>Admin Dashboard</div>
            <ul className="flex gap-2">
                <li>
                    Player Info
                </li>
                <li>
                    Player Representative Info
                </li>
                <li>
                    Active Player Report
                </li>
                <li>
                    Table Player Display
                </li>
                <li>
                    Issue Guest Pass
                </li>
            </ul>
            <div className="flex items-center">
                <AccountCircle />
                <div>John Doe</div>
            </div>
        </nav>
    )
}
import { auth } from "../services/firebase";

export default function LogoutButton() {
  const handleLogout = () => {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      auth.signOut();
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

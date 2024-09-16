// hooks
import { useLogout } from '../hooks/useLogout'

const MentorHome = () => {
  const { logout } = useLogout()

  const handleLogoutBtn = () => {
    logout()
  }

  return (
    <div className="container">
      <h1>Mentors Home</h1>

      <a href="/" onClick={handleLogoutBtn}>Log Out</a>

    </div>
  );
};

export default MentorHome;

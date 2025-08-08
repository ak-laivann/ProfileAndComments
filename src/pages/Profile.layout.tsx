import { ProfileCard, Spinner } from "../components";
import { useUserStore } from "../store/userStore";
import { useParams, Navigate } from "react-router-dom";

export const ProfileLayout = () => {
  const { id } = useParams<{ id: string }>();
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Spinner />;
  }

  if (id !== user.id.toString()) {
    return <Navigate to={`/profile/${user.id}`} replace />;
  }

  // no need of  async ui wrapper since the framework gets the user on mount of homecontainer.
  // if profile layout is used aside from the homecontainer, then use async ui wrapper
  return <ProfileCard user={user} />;
};

import { Navigate, Route, Routes } from "react-router-dom";
import { ProfileLayout } from "../pages";
import { useUserStore } from "../store/userStore";
import { Spinner } from "../components";

export const ProfileRoutes = () => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to={`./${user.id}`} />} />
      <Route path=":id" element={<ProfileLayout />} />
    </Routes>
  );
};

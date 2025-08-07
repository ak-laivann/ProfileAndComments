import { Route, Routes } from "react-router-dom";
import { ProfileLayout } from "../pages";

export const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path=":id" element={<ProfileLayout />} />
    </Routes>
  );
};

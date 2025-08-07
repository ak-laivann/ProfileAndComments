import { Navigate, Route, Routes } from "react-router-dom";
import { CommentsRoutes } from "./Comments.routes";
import { ProfileRoutes } from "./Profile.routes";

export const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={"/comments/all"} />} />
      <Route path="/comments/*" element={<CommentsRoutes />} />
      <Route path="/profile/*" element={<ProfileRoutes />} />
    </Routes>
  );
};

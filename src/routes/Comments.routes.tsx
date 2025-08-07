import { Route, Routes } from "react-router-dom";
import { CommentsLayout } from "../pages";

export const CommentsRoutes = () => {
  return (
    <Routes>
      <Route path="all" element={<CommentsLayout />} />
    </Routes>
  );
};

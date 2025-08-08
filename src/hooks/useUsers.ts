import { useEffect } from "react";
import { User } from "../props";
import { useUserStore } from "../store/userStore";
import { useFetchData } from "../hooks";

export const useUsers = () => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useFetchData<User[]>(
    "users",
    "https://jsonplaceholder.typicode.com/users",
    {
      enabled: !user,
    }
  );

  useEffect(() => {
    if (users && users.length > 0) {
      if (!user) {
        setUser(users[Math.floor(Math.random() * users.length)]);
      }
    }
  }, [users, setUser, user]);

  return { users, isLoading, isError, error };
};

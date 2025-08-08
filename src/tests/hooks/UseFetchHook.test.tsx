import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFetchData } from "../../hooks";

const mockFetch = (global.fetch = jest.fn());

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useFetchData", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("should fetch data successfully", async () => {
    const mockData = [{ id: 1, name: "Test User" }];
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(
      () => useFetchData("testKey", "https://api.example.com/data"),
      { wrapper: createWrapper() }
    );

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle fetch errors", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const { result } = renderHook(
      () => useFetchData("testKey", "https://api.example.com/data"),
      { wrapper: createWrapper() }
    );

    await waitFor(() => expect(result.current.isError).toBe(true));

    if (result.current.error) {
      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error.message).toBe("Fetch error: 500");
    }
  });
});

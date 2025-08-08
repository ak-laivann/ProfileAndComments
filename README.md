# Project Overview

This project is a React-based web application with the following main features:

---

## Features

### 1. Profile Page

- Displays a **Profile Card** showing user details.
- Includes navigation back to the **Comments Table**.

### 2. Comments Table

- Shows a list of comments with:
  - **Custom Pagination Component** (instead of Ant Design's default).
  - **Sort and Search Bar** to filter and sort comments by post ID, name, or email.
- Fully **mobile responsive** UI.

### 3. Header Behavior

- The header contains a logo.
- Clicking the logo triggers a **confirmation alert**.
- Upon confirmation:
  - Clears **localStorage**.
  - Clears the stored user in the global state.
  - Refreshes the page.

### 4. Data Fetching and Persistence

- User data is fetched on app mount via **React Query**.
- Due to React Query's caching and Zustand’s persistent store (with localStorage), the user data fetch is **not repeated unnecessarily** on page refresh.
- User information persists across refreshes thanks to Zustand's persistence middleware.

---

## Testing

- **Unit tests** have been added for:
  - The **Async UI Wrapper** component.
  - The **custom async fetch hook**.

---

## Technology Stack Highlights

- React with functional components and hooks.
- Zustand for state management and persistence.
- React Query for data fetching and caching.
- Ant Design for UI components with custom overrides.
- Custom components for pagination and sorting.
- Mobile responsive layout.

---

## Additional Notes

- The profile page and comments table are connected via routing.
- The comments table pagination and sorting are managed through a global store, ensuring consistent state and behavior.
- LocalStorage persistence improves user experience by avoiding repeated data fetching on refresh.

---

## Dependencies used

- [x] [AntDesign](https://ant.design/) - for UI and icons
- [x] [React](https://react.dev/) - come-on! I would have died before finishing this project if it wasn't for him. (_That's why he is the GOAT! the GOAT!!!_)
- [x] [React-router-dom](https://reactrouter.com/) - for navigation and combining layouts through routes (SPA!).
- [x] [Typescript](https://www.typescriptlang.org/) - The protector. (_It was perfect! PERFECT!. Down to the last minute detail_)
- [x] [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) - for state management.
- [x] [Styled Components](https://styled-components.com/) - for custom styled components.

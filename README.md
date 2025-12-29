# Data Fetching Architectures

A Next.js 15 project showcasing different data fetching patterns and architectures using TypeScript, TanStack Query (React Query), Bun runtime, and Tailwind CSS v4.

## Project Overview

This project demonstrates modern data fetching strategies in React/Next.js applications, comparing client-side approaches using native Fetch API and TanStack Query for efficient data management and caching.

## Tech Stack

- **Next.js 15.1.1** - React framework with App Router
- **React 19** - Latest React version with modern features
- **TypeScript** - Full type safety
- **TanStack Query v5** - Powerful data synchronization library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Bun** - Fast JavaScript runtime and package manager
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## Project Structure

```
data-fetching-architectures/
├── app/
│   ├── nativeFetch/
│   │   ├── fetcher.ts          # Native fetch handler with AbortController
│   │   └── NativeFetch.tsx     # Client component with table view
│   ├── tanStack-query/
│   │   ├── fetcher.ts          # TanStack Query fetcher
│   │   ├── getProducts.ts      # Product fetching function
│   │   └── ReactQuery.tsx      # React Query implementation with cards
│   ├── types/
│   │   └── types.ts            # Shared TypeScript types
│   ├── page.tsx                # Main entry with QueryClientProvider
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # Shadcn UI components (Button, Card, Table)
│   ├── CustomTable.tsx         # Reusable data table component
│   └── ProductCard.tsx         # Product card component
├── lib/
│   └── utils.ts                # Utility functions (cn, clsx)
└── public/                     # Static assets
```

## Features

### Core Features

- **Dual Data Fetching Patterns**: Native Fetch vs TanStack Query comparison
- **Request Cancellation**: AbortController for preventing race conditions
- **Automatic Caching**: TanStack Query handles caching and background refetching
- **Loading States**: Comprehensive UI feedback for all states
- **Error Handling**: Robust error handling across both patterns
- **TypeScript**: End-to-end type safety with shared type definitions
- **DevTools**: React Query DevTools for debugging

### UI Features

- **Multiple View Modes**: Table view (native fetch) and card grid (TanStack Query)
- **Responsive Design**: Mobile-first responsive layouts
- **Accessible Components**: Built with Radix UI primitives
- **Loading Indicators**: Visual feedback with spinners
- **Interactive Controls**: Fetch, clear, create, and delete actions

## Getting Started

### Prerequisites

- **Bun** v1.0+ installed on your system
- Node.js 20+ (optional, if not using Bun)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd data-fetching-architectures
```

2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL="https://fakestoreapi.com"
```

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
bun run build
bun start
```

## Data Fetching Patterns

### 1. Native Fetch with AbortController

**Location:** [app/nativeFetch/](app/nativeFetch/)

A traditional client-side data fetching approach using the native Fetch API with manual state management.

**Features:**

- Manual state management with React hooks (`useState`)
- AbortController integration for request cancellation
- Explicit loading, error, and success states
- Table view with CustomTable component
- Clear/Reset functionality

**Key Files:**

- [fetcher.ts](app/nativeFetch/fetcher.ts) - Async handler with state management
- [NativeFetch.tsx](app/nativeFetch/NativeFetch.tsx) - UI component with table

**Use Cases:**

- Simple, one-off requests
- Full control over fetch logic
- Learning/understanding fetch mechanics
- Scenarios where caching is not needed

### 2. TanStack Query (React Query)

**Location:** [app/tanStack-query/](app/tanStack-query/)

Modern server-state management using TanStack Query v5 with automatic caching, background updates, and optimized re-rendering.

**Features:**

- Automatic caching and background refetching
- Built-in loading and error states via `useQuery`
- Query invalidation and refetching
- DevTools for debugging
- Grid card layout with ProductCard component

**Key Files:**

- [getProducts.ts](app/tanStack-query/getProducts.ts) - Data fetching function
- [ReactQuery.tsx](app/tanStack-query/ReactQuery.tsx) - Query implementation
- [page.tsx](app/page.tsx) - QueryClientProvider setup

**Use Cases:**

- Complex applications with multiple data sources
- Need for automatic caching and synchronization
- Real-time data requirements
- Optimistic updates and mutations

## Comparison: Native Fetch vs TanStack Query

| Feature                   | Native Fetch           | TanStack Query          |
| ------------------------- | ---------------------- | ----------------------- |
| **Caching**               | Manual implementation  | Automatic               |
| **Loading States**        | Manual with useState   | Built-in with useQuery  |
| **Error Handling**        | Manual try/catch       | Built-in error states   |
| **Request Cancellation**  | Manual AbortController | Automatic               |
| **Background Refetching** | Not available          | Automatic               |
| **DevTools**              | Browser DevTools only  | React Query DevTools    |
| **Code Complexity**       | Higher                 | Lower                   |
| **Learning Curve**        | Lower                  | Higher                  |
| **Best For**              | Simple requests        | Complex data management |

## Type Definitions

The project uses shared TypeScript types defined in [app/types/types.ts](app/types/types.ts):

```typescript
type Status = "ideal" | "loading" | "error" | "success";

type returnedData = {
  id: number;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  image: string;
  category: string;
  description: string;
}[];
```

## Components

### UI Components (Shadcn UI)

- **Button** - [components/ui/button.tsx](components/ui/button.tsx)
- **Card** - [components/ui/card.tsx](components/ui/card.tsx)
- **Table** - [components/ui/table.tsx](components/ui/table.tsx)

### Custom Components

- **CustomTable** - [components/CustomTable.tsx](components/CustomTable.tsx) - Data table for displaying products
- **ProductCard** - [components/ProductCard.tsx](components/ProductCard.tsx) - Card view for individual products

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL="https://fakestoreapi.com"
```

## Scripts

```bash
# Development
bun dev

# Production build
bun run build

# Start production server
bun start
```

## Key Learnings

1. **Native Fetch** requires more boilerplate but offers complete control
2. **TanStack Query** reduces complexity with automatic caching and state management
3. **AbortController** is essential for preventing race conditions in manual fetch
4. **Type safety** improves developer experience and reduces bugs
5. **Shared types** ensure consistency across fetch implementations

## Future Enhancements

- [ ] Add mutations (POST, PUT, DELETE) with TanStack Query
- [ ] Implement optimistic updates
- [ ] Add pagination support
- [ ] Implement search and filtering
- [ ] Add Server Components with streaming
- [ ] Implement error boundaries
- [ ] Add unit and integration tests

## License

This project is open source and available under the MIT License.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Bun Documentation](https://bun.sh/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Environment Variables

| Variable               | Description                    | Example                    |
| ---------------------- | ------------------------------ | -------------------------- |
| `NEXT_PUBLIC_BASE_URL` | Base API URL for data fetching | `https://fakestoreapi.com` |

## License

MIT

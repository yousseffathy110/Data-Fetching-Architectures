# Data Fetching Architectures

A Next.js 16 project demonstrating different data fetching patterns and architectures using TypeScript, Bun, and Tailwind CSS.

## Project Overview

This project explores various data fetching strategies in modern React/Next.js applications, showcasing best practices and different architectural approaches.

## Project Structure

```
data-fetching-architectures/
├── app/
│   ├── nativeFetch/
│   │   ├── fetcher.ts          # Async fetch handler with AbortController
│   │   └── NativeFetch.tsx     # Client-side fetch component with UI
│   ├── types/
│   │   └── types.ts            # Shared TypeScript types
│   ├── page.tsx                # Main application entry
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # Reusable UI components (Button, Table)
│   └── CustomTable.tsx         # Data table component
├── public/                     # Static assets
├── .env.local                  # Environment variables
└── package.json
```

## Features

- **Native Fetch Pattern**: Client-side data fetching with AbortController support
- **Request Cancellation**: Proper abort handling for preventing race conditions
- **Loading States**: UI feedback with loading, error, and success states
- **Environment-based URLs**: Configurable API endpoints via environment variables
- **TypeScript**: Full type safety across the application with shared types
- **Tailwind CSS**: Utility-first styling with v4
- **Bun Runtime**: Fast package management and development
- **Radix UI**: Accessible component primitives

## Getting Started

### Prerequisites

- Bun installed on your system
- Node.js 20+ (optional)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL="https://fakestoreapi.com"
```

### Running the Development Server

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

### Native Fetch with AbortController

Location: `app/nativeFetch/`

A client-side data fetching pattern using the native Fetch API with advanced features:

- **AbortController Integration**: Cancel in-flight requests to prevent race conditions
- **State Management**: Manages loading, error, and success states via React hooks
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Request Deduplication**: Aborts previous requests before starting new ones
- **Environment-based Configuration**: Uses `NEXT_PUBLIC_BASE_URL` for API base URL
- **TypeScript Type Safety**: Fully typed with shared type definitions

**Implementation:**

```tsx
// fetcher.ts - Async handler with state management
import { fetchProps } from "../types/types";

export const handleFetch = async ({
  abortRef,
  setStatus,
  setError,
  setResult,
  url,
}: fetchProps) => {
  abortRef.current?.abort(); // Cancel previous request

  const abortController = new AbortController();
  abortRef.current = abortController;

  try {
    setStatus("loading");
    const res = await fetch(`${baseUrl}${url}`, {
      signal: abortController.signal,
    });

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    setResult(data);
    setStatus("success");
  } catch (err) {
    if ((err as Error).name === "AbortError") return;
    setError((err as Error).message);
    setStatus("error");
  }
};
```

**Component Usage:**

```tsx
// NativeFetch.tsx
const [result, setResult] = useState<returnedData>([]);
const [status, setStatus] = useState<Status>("ideal");
const [error, setError] = useState<string>("");
const abortRef = useRef<AbortController | null>(null);

const onFetch = () => {
  handleFetch({
    abortRef,
    setStatus,
    setError,
    setResult,
    url: "/products",
  });
};
```

**Key Features:**

- ✅ Prevents memory leaks with proper cleanup
- ✅ Handles race conditions via request cancellation
- ✅ Loading states for better UX
- ✅ Error boundary with retry capability
- ✅ Fully typed with TypeScript

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Runtime**: Bun
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI, Lucide Icons
- **React**: 19.2.3

## Environment Variables

| Variable               | Description                    | Example                    |
| ---------------------- | ------------------------------ | -------------------------- |
| `NEXT_PUBLIC_BASE_URL` | Base API URL for data fetching | `https://fakestoreapi.com` |

## Contributing

Feel free to explore different data fetching patterns and contribute new architectural examples.

## License

MIT

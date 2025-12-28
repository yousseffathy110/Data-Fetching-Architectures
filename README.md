# Data Fetching Architectures

A Next.js 16 project demonstrating different data fetching patterns and architectures using TypeScript, Bun, and Tailwind CSS.

## Project Overview

This project explores various data fetching strategies in modern React/Next.js applications, showcasing best practices and different architectural approaches.

## Project Structure

```
data-fetching-architectures/
├── app/
│   ├── nativeFetch/
│   │   ├── fetcher.ts          # Reusable fetch wrapper
│   │   └── NativeFetch.tsx     # Client-side fetch component
│   ├── page.tsx                # Main application entry
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── .env.local                  # Environment variables
└── package.json
```

## Features

- **Native Fetch Pattern**: Client-side data fetching with custom fetch wrapper
- **Environment-based URLs**: Configurable API endpoints via environment variables
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Utility-first styling with v4
- **Bun Runtime**: Fast package management and development

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

### Native Fetch

Location: `app/nativeFetch/`

A client-side data fetching pattern using the native Fetch API with:

- Custom fetch wrapper for reusability
- Error handling
- Environment-based configuration
- TypeScript type safety

**Usage Example:**

```tsx
import { fetcher } from "./fetcher";

const data = await fetcher({
  url: "/products",
  params: { method: "GET" },
});
```

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

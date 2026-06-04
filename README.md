# Next.js Blog Management Application

## Introduction

This project is a Blog Management Application developed using **Next.js App Router**, **React.js**, **TypeScript**, and **Tailwind CSS**. The primary goal of this application is to explore and implement modern Next.js features, including nested layouts, server components, client components, route handlers, dynamic routing, server actions, and metadata management.

The application will allow users to view blog posts, access individual post details through dynamic routes, create new posts using server actions, and interact with client-side features such as search and filtering. The project follows the latest Next.js architecture and best practices for building scalable and performant web applications.

---

## Technologies Used

* Next.js (App Router)
* React.js
* TypeScript
* Tailwind CSS
* ESLint
* Turbopack

---

## Project Setup

### Create a New Next.js Application

Run the following command to create a new Next.js project:

```bash
npx create-next-app@latest next-blog-assignment
```

Select the following configuration options:

```text
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like your code inside a src/ directory? Yes
✔ Would you like to use App Router? Yes
✔ Would you like to use Turbopack? Yes
✔ Would you like to customize import alias? No
```

---

### Navigate to the Project Directory

```bash
cd next-blog-assignment
```

---

### Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

Open the URL in your browser to verify that the Next.js application is running successfully.

---

## Assignment Objectives

This project demonstrates the following Next.js concepts:

* Create a basic application structure using nested layouts and pages.
* Implement Server Components to fetch and render initial data.
* Utilize Client Components for interactive UI and state management.
* Build REST APIs using Route Handlers.
* Implement Dynamic Routing for individual blog posts.
* Handle form submissions and data mutations using Server Actions.
* Manage SEO using the Metadata API.
* Apply responsive styling using Tailwind CSS.

The following sections will cover the implementation of each requirement in detail.

---

## Initial Folder Structure
```text
MINI-BLOG-MANAGEMENT
│
├── app
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   │
│   ├── dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── posts
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   │
│   │   │   ├── create
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── edit
│   │   │       └── [id]
│   │   │           └── page.tsx
│   │   │
│   │   ├── categories
│   │   │   └── page.tsx
│   │   │
│   │   ├── comments
│   │   │   └── page.tsx
│   │   │
│   │   ├── tags
│   │   │   └── page.tsx
│   │   │
│   │   ├── analytics
│   │   │   └── page.tsx
│   │   │
│   │   └── settings
│   │       └── page.tsx
│   │
│   ├── blog
│   │   └── [id]
│   │       └── page.tsx
│   │
│   ├── api
│   │   │
│   │   ├── posts
│   │   │   └── route.ts
│   │   │
│   │   ├── categories
│   │   │   └── route.ts
│   │   │
│   │   ├── comments
│   │   │   └── route.ts
│   │   │
│   │   └── analytics
│   │       └── route.ts
│   │
│   └── actions
│       ├── postActions.ts
│       ├── categoryActions.ts
│       └── commentActions.ts
│
├── components
│   │
│   ├── dashboard
│   │   │
│   │   ├── Sidebar.tsx
│   │   ├── DashboardHeader.tsx
│   │   ├── DashboardStats.tsx
│   │   ├── StatsCard.tsx
│   │   ├── QuickActions.tsx
│   │   ├── CategoryChart.tsx
│   │   ├── RecentPostsTable.tsx
│   │   ├── UserProfileCard.tsx
│   │   └── NotificationBell.tsx
│   │
│   ├── posts
│   │   │
│   │   ├── PostCard.tsx
│   │   ├── PostList.tsx
│   │   ├── SearchPosts.tsx
│   │   ├── CreatePostForm.tsx
│   │   ├── EditPostForm.tsx
│   │   └── DeletePostButton.tsx
│   │
│   ├── categories
│   │   ├── CategoryList.tsx
│   │   └── CategoryForm.tsx
│   │
│   ├── comments
│   │   ├── CommentList.tsx
│   │   └── CommentCard.tsx
│   │
│   ├── charts
│   │   ├── ViewsChart.tsx
│   │   ├── PostsChart.tsx
│   │   └── CategoryDistributionChart.tsx
│   │
│   ├── layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   │
│   └── ui
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       ├── Select.tsx
│       ├── Modal.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Loader.tsx
│       ├── Table.tsx
│       └── EmptyState.tsx
│
├── data
│   ├── posts.ts
│   ├── categories.ts
│   └── comments.ts
│
├── hooks
│   ├── useSearchPosts.ts
│   ├── useDebounce.ts
│   └── useDashboardStats.ts
│
├── lib
│   ├── api.ts
│   ├── constants.ts
│   ├── helpers.ts
│   └── metadata.ts
│
├── services
│   ├── postService.ts
│   ├── categoryService.ts
│   ├── analyticsService.ts
│   └── commentService.ts
│
├── types
│   ├── post.ts
│   ├── category.ts
│   ├── comment.ts
│   └── dashboard.ts
│
├── public
│   │
│   ├── images
│   │   ├── logo.png
│   │   ├── avatar.png
│   │   ├── blog-1.jpg
│   │   ├── blog-2.jpg
│   │   └── placeholder.jpg
│   │
│   └── icons
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
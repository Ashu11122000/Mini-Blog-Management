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

---

# Phase 1: Dashboard Foundation & Layout

## Objective

The goal of Phase 1 is to establish the foundational structure of the Blog Management Application by creating the main dashboard layout and navigation system. This phase focuses on implementing nested layouts, reusable UI components, and static dashboard data using the Next.js App Router architecture.

---

## Features Implemented

### 1. Dashboard Layout

A dedicated dashboard layout was created using Next.js nested layouts. The dashboard layout includes:

* Persistent Sidebar Navigation
* Top Dashboard Header
* Main Content Area
* Responsive Layout Structure

This layout ensures that all dashboard pages share a consistent user interface.

---

### 2. Sidebar Navigation

A reusable sidebar component was developed to provide navigation throughout the admin dashboard.

Navigation links include:

* Dashboard
* All Posts
* Create Post
* Categories
* Tags
* Comments
* Analytics
* Settings

The sidebar remains visible across all dashboard routes through the use of nested layouts.

---

### 3. Dashboard Header

A reusable dashboard header component was implemented containing:

* Dashboard Title
* Notification Area
* User Information Section

This component serves as the top navigation bar for all dashboard pages.

---

### 4. Dashboard Statistics Section

A statistics overview section was created to display key blog metrics:

* Total Posts
* Total Views
* Total Comments
* Total Categories

Each metric is displayed using reusable `StatsCard` components.

---

### 5. Recent Posts Table

A recent posts table was implemented to display blog post information including:

* Post Title
* Category
* View Count
* Comment Count

The table currently uses static mock data and will later be connected to API routes.

---

### 6. Static Dashboard Data

Mock data was created to simulate:

* Dashboard statistics
* Recent blog posts

This data allows the dashboard UI to be developed before backend integration.

---

## Next.js Concepts Covered

Phase 1 demonstrates the following Next.js App Router concepts:

* App Router Structure
* Nested Layouts
* Reusable Components
* TypeScript Interfaces
* Static Data Rendering
* Component Composition
* Route-Based Layout Management

---

## Folder Structure Used in Phase 1

```text
app
├── dashboard
│   ├── layout.tsx
│   └── page.tsx

components
├── dashboard
│   ├── Sidebar.tsx
│   ├── DashboardHeader.tsx
│   ├── StatsCard.tsx
│   ├── DashboardStats.tsx
│   └── RecentPostsTable.tsx

data
└── dashboard.ts

types
└── dashboard.ts
```

---

## Output

At the end of Phase 1, the application includes:

✔ Dashboard Sidebar Navigation

✔ Dashboard Header

✔ Statistics Cards

✔ Recent Posts Table

✔ Nested Dashboard Layout

✔ Responsive Dashboard Structure

This phase establishes the core user interface that will be extended in later phases with dynamic routing, API routes, server actions, metadata management, search functionality, analytics, and blog management features.

---

# Phase 2: Blog Posts Management & Dynamic Routing

## Objective

The goal of Phase 2 is to implement the core blog management functionality by creating a dedicated posts module, enabling dynamic blog post routing, and introducing interactive client-side features. This phase focuses on displaying blog content, managing posts through reusable forms, and exploring Next.js App Router features such as dynamic routes, loading states, and client components.

---

## Features Implemented

### 1. Blog Posts Listing Page

A dedicated posts management page was created within the dashboard to display all available blog posts.

The page provides:

* Overview of all blog posts
* Reusable post listing structure
* Navigation to create and edit posts
* Foundation for future API integration

---

### 2. Create Post Page

A new post creation page was implemented using a reusable form component.

Features include:

* Post title input
* Category input
* Content textarea
* Form validation using required fields
* Client-side state management with React Hooks

The form currently uses mock submission handling and prepares the application for future Server Actions integration.

---

### 3. Reusable Create Post Form Component

A reusable `CreatePostForm` component was developed to handle post creation.

Responsibilities include:

* Managing form state
* Handling user input
* Processing form submission
* Resetting fields after successful submission

This component demonstrates the use of Client Components and React state management.

---

### 4. Edit Post Form

A reusable `EditPostForm` component was created to support updating existing blog posts.

Features include:

* Pre-filled form values
* Editable title, category, and content fields
* Form submission handling
* Update workflow simulation

This component will later be connected to Server Actions and database operations.

---

### 5. Dynamic Edit Post Route

Dynamic routing was implemented for editing individual blog posts.

Route structure:

```text
/dashboard/posts/edit/[id]
```

Examples:

```text
/dashboard/posts/edit/1
/dashboard/posts/edit/2
/dashboard/posts/edit/3
```

The route dynamically retrieves the post identifier and renders the corresponding edit interface.

---

### 6. Dynamic Blog Post Pages

A public-facing blog route was created using Next.js Dynamic Routing.

Route structure:

```text
/blog/[id]
```

Examples:

```text
/blog/1
/blog/2
/blog/3
```

Each route displays content for a specific blog post based on its unique identifier.

---

### 7. Search Posts Component

A reusable search component was implemented to support client-side post searching.

Features include:

* Real-time search input
* Controlled component pattern
* Search callback functionality
* Preparation for filtering and debouncing

This component introduces interactive UI behavior using Client Components.

---

### 8. Delete Post Functionality

A reusable delete component was added to support post removal actions.

Features include:

* Delete confirmation dialog
* Post identification handling
* User feedback after deletion

This functionality currently uses mock behavior and prepares the application for future data mutations.

---

### 9. Loading State

A route-level loading UI was implemented for the posts section.

Benefits include:

* Improved user experience
* Visual feedback during page transitions
* Demonstration of Next.js loading conventions

---

### 10. Custom Not Found Handling

The application supports custom error handling when invalid routes or blog post IDs are accessed.

Features include:

* Custom 404 page
* Invalid post detection
* User-friendly navigation back to the dashboard

---

## Next.js Concepts Covered

Phase 2 demonstrates the following Next.js App Router concepts:

* Dynamic Routing
* Route Parameters
* Client Components
* React State Management
* Form Handling
* Loading UI
* Not Found Pages
* Component Reusability
* Dashboard Navigation
* Interactive User Interfaces

---

## Folder Structure Used in Phase 2

```text
app
├── blog
│   └── [id]
│       └── page.tsx
│
├── dashboard
│   └── posts
│       ├── page.tsx
│       ├── loading.tsx
│       │
│       ├── create
│       │   └── page.tsx
│       │
│       └── edit
│           └── [id]
│               └── page.tsx

components
├── posts
│   ├── CreatePostForm.tsx
│   ├── EditPostForm.tsx
│   ├── SearchPosts.tsx
│   └── DeletePostButton.tsx
```

---

## Output

At the end of Phase 2, the application includes:

✔ Blog Posts Management Page

✔ Create Post Page

✔ Create Post Form

✔ Edit Post Form

✔ Dynamic Edit Routes

✔ Dynamic Blog Post Pages

✔ Search Posts Component

✔ Delete Post Functionality

✔ Loading UI

✔ Custom Not Found Handling

✔ Reusable Post Components

This phase establishes the complete blog post management workflow and prepares the application for Phase 3, where API Routes, data services, and Server Actions will be introduced to enable real data handling and persistence.

---
# TaskMaster - Task Management Application

A modern, beautiful task management application built with Next.js, Supabase, and Tailwind CSS.

![TaskMaster](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![Supabase](https://img.shields.io/badge/Supabase-Authentication-green?style=for-the-badge&logo=supabase)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- 🎨 **Modern UI** - Beautiful gradient designs with vibrant purple/blue color scheme
- 📋 **Kanban Board** - Organize tasks in To Do, In Progress, and Done columns
- 🔐 **Secure Authentication** - Email-based authentication with Supabase
- 🌓 **Dark Mode** - Automatic theme switching with system preference support
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - Instant task updates across the application
- 🎯 **Priority Levels** - Categorize tasks as Low, Medium, or High priority
- 🔍 **Status Tracking** - Track task progress with visual indicators

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account ([sign up here](https://supabase.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task_management_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Set up the database**
   
   Run the SQL script in your Supabase SQL Editor:
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   - Navigate to SQL Editor
   - Copy and run the contents of `scripts/01-setup-tasks.sql`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
task_management_app/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication routes
│   ├── dashboard/         # Dashboard page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── task-card.tsx     # Task card component
│   ├── task-dashboard.tsx # Dashboard layout
│   └── create-task-modal.tsx # Task creation modal
├── store/                # Zustand state management
├── utils/                # Utility functions
│   └── supabase/         # Supabase client configuration
└── scripts/              # Database setup scripts
```

## 🎨 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Authentication**: [Supabase Auth](https://supabase.com/auth)
- **Database**: [Supabase (PostgreSQL)](https://supabase.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |

## 📝 Usage

### Creating a Task
1. Navigate to the dashboard
2. Click the "New Task" button
3. Fill in the task details (title, description, priority, status)
4. Click "Create Task"

### Managing Tasks
- **Update Status**: Use the dropdown on each task card
- **Delete Task**: Click the trash icon on the task card
- **View by Status**: Tasks are automatically organized in columns

### Authentication
- **Sign Up**: Create a new account with email/password
- **Email Confirmation**: Check your email for the confirmation link
- **Sign In**: Log in with your credentials
- **Sign Out**: Click "Sign out" in the dashboard header

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Gradient Headers**: Eye-catching purple-to-blue gradients
- **Hover Animations**: Smooth scale and color transitions
- **Priority Colors**: Visual indicators for task priority
- **Responsive Layout**: Adapts to all screen sizes
- **Dark Mode Support**: Automatic theme switching

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ using Next.js and Supabase

---

**Note**: Remember to never commit your `.env.local` file to version control!

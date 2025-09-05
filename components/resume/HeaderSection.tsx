interface User {
  name: string;
  email: string;
  phone: string;
  designation: string;
  linkedin: string;
  github: string;
}

export default function HeaderSection({ user }: User) {
  return (
    <section className="mb-6 text-center">
      <h1 className="text-5xl font-bold text-slate-900">{user.name}</h1>
      <h2 className="mb-1 text-2xl font-medium text-slate-700">
        {user.designation}
      </h2>

      <div className="flex items-center justify-center space-x-2 text-base font-normal text-slate-600">
        <p className="flex items-center space-x-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 
                     1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352
                     a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 
                     0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 
                     1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 
                     1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span>{user.phone}</span>
        </p>

        <p className="flex items-center space-x-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 0 0 3 
                         3h15a3 3 0 0 0 3-3V8.67l-8.928 
                         5.493a3 3 0 0 1-3.144 0L1.5 
                         8.67Z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 
                         3 0 0 0-3 3v.158l9.714 
                         5.978a1.5 1.5 0 0 0 1.572 
                         0L22.5 6.908Z"
            />
          </svg>
          <span>{user.email}</span>
        </p>

        <p className="flex items-center space-x-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 0C5.36 0 0 5.5 0 12.3c0 5.44 3.44 
                     10 8.21 11.7c.597.122.815-.265.815-.59c0-.285-.02-1.26-.02-2.28c-3.34.734-4.04-1.47-4.04-1.47
                     c-.537-1.43-1.33-1.79-1.33-1.79c-1.09-.754.08-.754.08-.754c1.21.082 1.85 1.26 
                     1.85 1.26c1.07 1.87 2.8 1.34 3.5 
                     1.02c.1-.794.418-1.34.756-1.65c-2.66-.285-5.47-1.34-5.47-6.07
                     c0-1.34.477-2.44 1.23-3.3c-.12-.306-.537-1.57.119-3.26c0 
                     0 1.01-.326 3.3 1.26c.979-.269 
                     1.99-.406 3-.407s2.05.143 
                     3 .407c2.29-1.59 3.3-1.26 
                     3.3-1.26c.656 1.69.238 2.95.119 
                     3.26c.776.855 1.23 1.96 1.23 
                     3.3c0 4.73-2.8 5.76-5.49 
                     6.07c.438.387.815 1.12.815 
                     2.28c0 1.65-.02 2.97-.02 
                     3.38c0 .326.22.713.815.591c4.77-1.63 
                     8.21-6.23 8.21-11.7c.02-6.8-5.37-12.3-12-12.3z"
              clipRule="evenodd"
            />
          </svg>
          <a href={user.github} target="_blank" rel="noreferrer">
            DeloarBP
          </a>
        </p>

        {/* LinkedIn */}
        <p className="flex items-center space-x-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 
                     2v14a2 2 0 0 1-2 2H5a2 
                     2 0 0 1-2-2V5a2 2 0 0 
                     1 2-2zm-.5 15.5v-5.3a3.26 
                     3.26 0 0 0-3.26-3.26c-.85 
                     0-1.84.52-2.32 
                     1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 
                     1.39-1.4a1.4 1.4 0 0 1 
                     1.4 1.4v4.93zM6.88 
                     8.56a1.68 1.68 0 0 
                     0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 
                     1.69 0 0 0-1.69 1.69c0 
                     .93.76 1.68 1.69 1.68m1.39 
                     9.94v-8.37H5.5v8.37z"
            />
          </svg>
          <a href={user.linkedin} target="_blank" rel="noreferrer">
            Deloar Bapari
          </a>
        </p>
      </div>
    </section>
  );
}

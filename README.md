# harmonie-colab
A collaboration tool, usefull for stidying, work, and friends to share ideas together.

# Tech Stack (planning phase)

## Frontend

The frontend will be made with NextJS to easily have great SEO, and making routing simple. I will also make use of tailwind for styling.

## Backend

I will use FastAPI as I have never used it and think it will be usefull as it is widely used in the tech industry.
It will be a REST API with real time updates using websockets. (Socket.IO)
PostgreSQL will be my database as it is great for relational tasks and scheduling queries.
The project will use Docker with CI/CD routines to deploy to my raspberry pi that will use cloudflare to expose it securely to the www.

# Extra Features

Here are some extra features that I plan to add to make the project better after the creation of the initial site, to showcase my knowledge.
- Notifications (push using PWA)
- OAuth login (Google, Linikedin, Discord & 42)
- Background worker for reminders (Redis Queue)
- User Defineable Themes (through tailwind)
- Presence indicators (using websockets)

I also plan to add documentation, devlogs, and a bug tracking system (through GitHub issues) to complete the project and round out any potential missed bugs.

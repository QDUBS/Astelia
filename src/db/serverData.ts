export const serverData = [
  {
    name: "Web Server 1",
    description:
      "Handles all incoming HTTP/HTTPS traffic for the website, including load balancing and SSL termination. Critical for website uptime and user accessibility.",
    ip: "192.168.1.2",
    risk: "critical",
  },
  {
    name: "Database Server",
    description:
      "Stores and manages application data, including user profiles, transactions, and logs. A vital component for backend operations and data retrieval.",
    ip: "192.168.1.3",
    risk: "high",
  },
  {
    name: "Backup Server",
    description:
      "Maintains scheduled backups of critical data to prevent loss during unexpected downtimes. Supports disaster recovery and business continuity.",
    ip: "192.168.1.4",
    risk: "high",
  },
  {
    name: "Application Server",
    description:
      "Runs the business logic and processes for the application, connecting the frontend and backend systems. Ensures smooth execution of user requests.",
    ip: "192.168.1.5",
    risk: "medium",
  },
  {
    name: "Server E",
    description:
      "Monitors server health and network traffic, ensuring the overall stability of the infrastructure. Supports analytics and reporting for performance optimization.",
    ip: "192.168.1.6",
    risk: "low",
  },
  {
    name: "Server F",
    description:
      "Manages email services, including sending and receiving notifications and updates. Ensures uninterrupted communication within the system.",
    ip: "192.168.1.7",
    risk: "low",
  },
];

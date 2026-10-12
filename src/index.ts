

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const users: User[] = [
  { id: 1, name: "Alice", email: "3lEYK@example.com", isActive: true },
  { id: 2, name: "Bob", email: "Y6o0F@example.com", isActive: false },
  { id: 3, name: "Charlie", email: "oQ2y8@example.com" , isActive: true },
];

const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);
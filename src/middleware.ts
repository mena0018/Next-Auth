// Without a defined matcher, this one line applies next-auth to the entire project
export { default } from 'next-auth/middleware';

// Protect only admin route
export const config = { matcher: ['/admin'] };

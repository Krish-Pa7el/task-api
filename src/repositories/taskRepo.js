import prisma from '../config/db.js';

// Find tasks, optionally filtered (e.g. { completed: true })
export async function findAll(filter = {}) {
  return prisma.task.findMany({
    where: filter,
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

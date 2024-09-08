import { db } from '@/db/index';
import { users, UserInsert } from '@/db/schema/user';

export async function createUser(userData: Omit<UserInsert, 'id' | 'createdAt' | 'updatedAt'>): Promise<UserInsert> {
  
  const newUser: UserInsert = {
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.insert(users).values(newUser);
  
  return newUser;
}

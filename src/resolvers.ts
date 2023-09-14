import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: (_: any, { userId }: { userId: number }) => {
      return prisma.user.findMany({
        where: {
          id: {
            equals: userId
          }
        },
        include: {
          members: {
            include: {
              chat: true
            }
          }
        }
      });
    },
    chats: (_: any, { chatId }: { chatId: number }) => {
      return prisma.chat.findMany({
        where: {
          id: {
            equals: chatId
          }
        },
        include: {
          messages: {
            include: {
              owner: {
                include: {
                  user: true
                }
              }
            }
          },
          members: true
        }
      });
    }
  },
  Mutation: {
    createChat: async (
      _: any,
      { name, everyoneCanJoin, userId }: { name: string; everyoneCanJoin: boolean; userId: number }
    ) => {
      const chat = await prisma.chat.create({
        data: {
          name,
          everyoneCanJoin
        }
      });

      await prisma.member.create({
        data: {
          chatId: chat.id,
          userId
        }
      });

      return chat;
    },

    joinChat: (_: any, { userId, chatId }: { userId: number; chatId: number }) => {
      return prisma.member.create({
        data: {
          chatId,
          userId
        }
      });
    },

    sendMessage: async (
      _: any,
      { message, userId, chatId }: { message: string; userId: number; chatId: number }
    ) => {
      return prisma.message.create({
        data: {
          message,
          createdAt: new Date(),
          userId,
          chatId
        }
      });
    }
  }
};

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const SashaUser = await prisma.user.create({
    data: {
      name: 'Oleksandr Honcharov',
      avatar: 'URL'
    }
  });

  const SashaChat = await prisma.chat.create({
    data: {
      name: 'Gameloft',
      everyoneCanJoin: true
    }
  });

  const SashaMember = await prisma.member.create({
    data: {
      userId: SashaUser.id,
      chatId: SashaChat.id
    }
  });

  const SashaMessage = await prisma.message.create({
    data: {
      message: 'Hello to everyone!',
      createdAt: new Date(),
      userId: SashaUser.id,
      chatId: SashaChat.id
    }
  });

  console.log({ SashaUser, SashaChat, SashaMember, SashaMessage });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

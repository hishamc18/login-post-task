// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'hisham',
      password: "123456",
    },
  });

  console.log('✅ User seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

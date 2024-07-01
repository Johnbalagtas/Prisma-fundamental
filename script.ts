import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.update({
    where: {
        email: "sally@test1@gmail.com",
    },
    data: {
        email: "sally@test3.com"
    },
  });
  console.log(user);
}
main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

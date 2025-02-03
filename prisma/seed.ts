import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function deleteAllData() {
  // Directly call deleteMany on each model
  await prisma.products.deleteMany({});
  console.log("Cleared data from products");

  await prisma.sales.deleteMany({});
  console.log("Cleared data from sales");

  await prisma.purchases.deleteMany({});
  console.log("Cleared data from purchases");

  await prisma.user.deleteMany({});
  console.log("Cleared data from users");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function seedModel(fileName: string, model: any) {
  const filePath = path.join(__dirname, "seedData", fileName);
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (const data of jsonData) {
    await model.create({
      data,
    });
  }

  console.log(`Seeded data from ${fileName}`);
}

async function main() {
  await deleteAllData();

  await seedModel("products.json", prisma.products);
  await seedModel("sales.json", prisma.sales);
  await seedModel("purchases.json", prisma.purchases);
  await seedModel("users.json", prisma.user);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

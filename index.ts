
// import { PrismaClient } from '@prisma/client' => SyntaxError: Cannot use import statement outside a module
// change to the following declaration  
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
    await prisma.invoices.create({
        data:{
            customer_id: 'cc27c14a-0acf-4f4a-a6c9-d45682c144b9',
            amount: 298.75,
            status: 'pending',
            date: '2024-03-12T10:00:00.000Z'
        }
    })
    const allInvoices = await prisma.invoices.findMany()
    console.log(allInvoices)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
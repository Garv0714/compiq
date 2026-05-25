import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const companies = [
  'Google',
  'Amazon',
  'Meta',
  'Netflix',
  'Microsoft',
  'Uber',
]

const roles = [
  'Backend Engineer',
  'Frontend Engineer',
  'Full Stack Engineer',
  'ML Engineer',
]

const levels = ['L1', 'L2', 'L3', 'L4', 'L5']

const locations = [
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Delhi',
]

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function normalize(company: string) {
  return company.toLowerCase().replace(/\s+/g, '')
}

async function main() {
  await prisma.compensation.deleteMany()

  for (let i = 0; i < 250; i++) {
    const baseSalary =
      Math.floor(Math.random() * 3500000) + 700000

    const bonus = Math.floor(baseSalary * 0.15)

    const stock =
      Math.floor(Math.random() * 2500000)

    await prisma.compensation.create({
      data: {
        company: randomItem(companies),

        normalizedCompany: normalize(
          randomItem(companies)
        ),

        role: randomItem(roles),

        level: randomItem(levels),

        location: randomItem(locations),

        baseSalary,

        bonus,

        stock,

        totalComp: baseSalary + bonus + stock,

        experience:
          Math.floor(Math.random() * 10) + 1,
      },
    })
  }

  console.log('Database seeded')
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const companies =
    searchParams.get('companies')

  if (!companies) {
    return NextResponse.json([])
  }

  const companyList =
    companies.split(',')

  const data = await Promise.all(
    companyList.map(async (company) => {
      const salaries =
        await prisma.compensation.findMany({
          where: {
            company: {
              equals: company,
              mode: 'insensitive',
            },
          },
        })

      const total =
        salaries.reduce(
          (acc, item) =>
            acc + item.totalComp,
          0
        )

      const avg =
        salaries.length > 0
          ? total / salaries.length
          : 0

      const highest =
        salaries.length > 0
          ? Math.max(
              ...salaries.map(
                (s) => s.totalComp
              )
            )
          : 0

      return {
        company,
        avgComp: avg,
        highestComp: highest,
        totalRecords:
          salaries.length,
      }
    })
  )

  return NextResponse.json(data)
}
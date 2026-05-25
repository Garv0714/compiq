import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  context: {
    params: Promise<{
      company: string
    }>
  }
) {
  const params = await context.params

  const company = params.company

  const salaries =
    await prisma.compensation.findMany({
      where: {
        company: {
          equals: company,
          mode: 'insensitive',
        },
      },
    })

  const totalRecords = salaries.length

  const avgTotalComp =
    salaries.reduce(
      (acc, item) => acc + item.totalComp,
      0
    ) / totalRecords

  const highestComp = Math.max(
    ...salaries.map((item) => item.totalComp)
  )

  const avgBaseSalary =
    salaries.reduce(
      (acc, item) => acc + item.baseSalary,
      0
    ) / totalRecords

  return NextResponse.json({
    company,
    totalRecords,
    avgTotalComp,
    highestComp,
    avgBaseSalary,
    salaries,
  })
}
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const salaries = await prisma.compensation.findMany()

    const companyMap: Record<
      string,
      {
        total: number
        count: number
      }
    > = {}

    salaries.forEach((salary) => {
      if (!companyMap[salary.company]) {
        companyMap[salary.company] = {
          total: 0,
          count: 0,
        }
      }

      companyMap[salary.company].total +=
        salary.totalComp

      companyMap[salary.company].count += 1
    })

    const leaderboard = Object.entries(
      companyMap
    )
      .map(([company, value]) => ({
        company,
        avgComp:
          value.total / value.count,
      }))
      .sort(
        (a, b) => b.avgComp - a.avgComp
      )

    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error:
          'Failed to fetch leaderboard',
      },
      {
        status: 500,
      }
    )
  }
}
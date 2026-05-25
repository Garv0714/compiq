import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const company =
    searchParams.get('company') || ''

  const role =
    searchParams.get('role') || ''

  const level =
    searchParams.get('level') || ''

  const location =
    searchParams.get('location') || ''

  const salaries =
    await prisma.compensation.findMany({
      where: {
        company: {
          contains: company,
          mode: 'insensitive',
        },

        role: {
          contains: role,
          mode: 'insensitive',
        },

        level: {
          contains: level,
          mode: 'insensitive',
        },

        location: {
          contains: location,
          mode: 'insensitive',
        },
      },

      orderBy: {
        totalComp: 'desc',
      },

      take: 100,
    })

  return NextResponse.json(salaries)
}
export function generateInsights(data: any[]) {
  if (!data.length) {
    return []
  }

  const insights = []

  const avgStock =
    data.reduce(
      (acc, item) => acc + item.stock,
      0
    ) / data.length

  const avgBase =
    data.reduce(
      (acc, item) => acc + item.baseSalary,
      0
    ) / data.length

  if (avgStock > avgBase * 0.4) {
    insights.push(
      'Compensation packages are heavily stock-driven across this company.'
    )
  }

  const backendCount = data.filter((item) =>
    item.role.includes('Backend')
  ).length

  const frontendCount = data.filter((item) =>
    item.role.includes('Frontend')
  ).length

  if (backendCount > frontendCount) {
    insights.push(
      'Backend engineering roles dominate compensation distribution.'
    )
  }

  const seniorRoles = data.filter(
    (item) =>
      item.level === 'L4' ||
      item.level === 'L5'
  ).length

  if (seniorRoles > data.length * 0.3) {
    insights.push(
      'Senior engineering compensation bands are strongly represented.'
    )
  }

  insights.push(
    'AI-generated compensation intelligence updated dynamically from compensation records.'
  )

  return insights
}
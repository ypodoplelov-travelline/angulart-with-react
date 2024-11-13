const time = Number(process.env._TIME_ENTRY_) || Date.now()

export const buildVersion = {
  time,
  date: new Date(time),
  sha: process.env.GITHUB_SHA || '',
  tz: process.env.TZ || '',
}

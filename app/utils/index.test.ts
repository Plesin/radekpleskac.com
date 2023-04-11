import { getReleaseDate } from './index'

describe('getReleaseDate', () => {
  it('should return empty string if date is null', () => {
    expect(getReleaseDate(null)).toBe('')
  })

  it('should return MM YYYY if date passed', () => {
    expect(getReleaseDate('2023-03-27T00:00:00.000Z')).toBe('Mar 2023')
  })

  it('should return MM YYYY if date passed', () => {
    expect(getReleaseDate('2011-07-14T00:00:00.000Z')).toBe('Jul 2011')
  })
})

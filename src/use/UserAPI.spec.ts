import { describe, it, expect, beforeAll } from 'vitest'
import { getUsers } from './UserAPI' // Adjust the path as necessary

// Helper function to extract property names
const extractKeys = (users: Record<string, any>[]) => {
  return users.map((user) => Object.keys(user).sort()) // Sort keys to ensure consistent ordering
}

describe('User API Snapshot Test', () => {
  let users: any[] // Type can be defined as needed, e.g., User[]

  beforeAll(async () => {
    users = await getUsers() // Fetch users before running tests
  })

  it('matches the snapshot for properties', () => {
    const userKeys = extractKeys(users)

    // Check that each user has the required properties
    userKeys.forEach((keys) => {
      expect(keys).toEqual(
        expect.arrayContaining(['FristName', 'LastName', 'Email', 'id', 'Phone'])
      )
    })
    // Take a snapshot of the keys
    expect(userKeys).toMatchSnapshot()
  })
})

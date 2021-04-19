import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'

initTestHelpers()

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('SSG Test Cases', () => {
  it('Should render the list of users pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/hasura-ssg',
    })
    render(page)
    expect(await screen.findByText('SSG+ISR')).toBeInTheDocument()
    expect(screen.getByText('Test user A')).toBeInTheDocument()
    expect(screen.getByText('Test user B')).toBeInTheDocument()
    expect(screen.getByText('Test user C')).toBeInTheDocument()
  })
})

import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
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

describe('Navigation Test Cases', () => {
  it('Should route to selected page in navbar', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)
    expect(await screen.findByText('Next.js + GraphQL')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('makevar-nav'))
    expect(await screen.findByText('makeVar')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('fetchpolicy-nav'))
    expect(await screen.findByText('Hasura main page')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('crud-nav'))
    expect(await screen.findByText('Hasura CRUD')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('ssg-nav'))
    expect(await screen.findByText('SSG+ISR')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('memo-nav'))
    expect(
      await screen.findByText('Custom Hook + useCallback + memo')
    ).toBeInTheDocument()
    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Next.js + GraphQL')).toBeInTheDocument()
  })
})

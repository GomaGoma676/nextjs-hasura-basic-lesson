import { graphql } from 'msw'
export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: 'b6137849-7f1d-c2db-e609-22056fb86db3',
            name: 'Test user A',
            created_at: '2021-01-13T18:06:46.412969+00:00',
          },
          {
            __typename: 'users',
            id: '2b07950f-9959-1bc7-834d-5656e4aeaac2',
            name: 'Test user B',
            created_at: '2021-02-13T18:06:46.412969+00:00',
          },
          {
            __typename: 'users',
            id: '7fe58619-10ec-5239-6f43-1da15a634aba',
            name: 'Test user C',
            created_at: '2021-03-13T18:06:46.412969+00:00',
          },
        ],
      })
    )
  }),
  graphql.query('GetUserIDs', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: 'b6137849-7f1d-c2db-e609-22056fb86db3',
          },
          {
            __typename: 'users',
            id: '2b07950f-9959-1bc7-834d-5656e4aeaac2',
          },
          {
            __typename: 'users',
            id: '7fe58619-10ec-5239-6f43-1da15a634aba',
          },
        ],
      })
    )
  }),
  graphql.query('GetUserById', (req, res, ctx) => {
    const { id } = req.variables
    if (id === 'b6137849-7f1d-c2db-e609-22056fb86db3') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: 'b6137849-7f1d-c2db-e609-22056fb86db3',
            name: 'Test user A',
            created_at: '2021-01-13T18:06:46.412969+00:00',
          },
        })
      )
    }
    if (id === '2b07950f-9959-1bc7-834d-5656e4aeaac2') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '2b07950f-9959-1bc7-834d-5656e4aeaac2',
            name: 'Test user B',
            created_at: '2021-02-13T18:06:46.412969+00:00',
          },
        })
      )
    }
    if (id === '7fe58619-10ec-5239-6f43-1da15a634aba') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '7fe58619-10ec-5239-6f43-1da15a634aba',
            name: 'Test user C',
            created_at: '2021-03-13T18:06:46.412969+00:00',
          },
        })
      )
    }
  }),
]

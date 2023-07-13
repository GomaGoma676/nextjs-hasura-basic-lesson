import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generates/graphql'
import { Layout } from '../components/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    // ★クエリ実行するたびにgraphQLサーバーfetch
    // fetchPolicy: 'network-only',
    // ★graphQLのfetch中にキャッシュに存在しているデータを一旦表示させる
    fetchPolicy: 'cache-and-network',
    // ★一旦取得したデータがキャッシュにある場合はキャッシュを常に読みに行く
    // (サーバーサイドで新たにデータに変更があっても反映されない)
    // fetchPolicy: 'cache-first',
    // キャッシュを全く使わない
    // fetchPolicy: 'no-cache',
  })
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
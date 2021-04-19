import { VFC, memo, Dispatch, SetStateAction } from 'react'
import { Users, DeleteUserMutationFn } from '../types/generated/graphql'

interface Props {
  user: {
    __typename?: 'users'
  } & Pick<Users, 'id' | 'name' | 'created_at'>
  delete_users_by_pk: DeleteUserMutationFn
  setEditedUser: Dispatch<
    SetStateAction<{
      id: string
      name: string
    }>
  >
}

export const UserItem: VFC<Props> = memo(
  ({ user, delete_users_by_pk, setEditedUser }) => {
    //console.log('UserItem rendered')
    return (
      <div className="my-1">
        <span className="mr-2">{user.name}</span>
        <span className="mr-2">{user.created_at}</span>
        <button
          className="mr-1 py-1 px-3 text-white bg-green-600 hover:bg-green-700 rounded-2xl focus:outline-none"
          data-testid={`edit-${user.id}`}
          onClick={() => {
            setEditedUser(user)
          }}
        >
          Edit
        </button>
        <button
          className="py-1 px-3 text-white bg-pink-600 hover:bg-pink-700 rounded-2xl focus:outline-none"
          data-testid={`delete-${user.id}`}
          onClick={async () => {
            await delete_users_by_pk({
              variables: {
                id: user.id,
              },
            })
          }}
        >
          Delete
        </button>
      </div>
    )
  }
)

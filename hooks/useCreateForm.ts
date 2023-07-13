import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../queries/queries'
import { CreateUserMutation } from '../types/generates/graphql'

export const useCreateForm = () => {
  const [text, setText] = useState('')
  const [username, setUsername] = useState('')

  const [insert_users_one] = useMutation<CreateUserMutation>(CREATE_USER, {
    // CreateUserMutationが完了したときに走る処理
    // insert_users_one: CreateUserMutationの返り値(id, name, created_at)が入ってる
    update(cache, { data: { insert_users_one } }) {
      // 作ったユーザーのキャッシュIDを取得(typenameとidを組み合わせた値)
      const cacheId = cache.identify(insert_users_one)
      // cache.modifyのfield: 更新したいフィールドを指定
      cache.modify({
        fields: {
          // toReference(引数): 引数(cacheId)に紐づいたデータを参照することができる
          // →usersのフィールドのキャッシュを更新
          // users(第1引数:既存の配列のキャッシュを受け取る変数, 第2引数:特定のオブジェクトを参照するための関数)
          users(existingUsers, { toReference }) {
            return [toReference(cacheId), ...existingUsers]
          },
        },
      })
    },
  })

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const usernameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, [])

  const printMsg = useCallback(() => {
    console.log('Hello')
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await insert_users_one({
          variables: {
            name: username,
          },
        })
      } catch (err) {
        alert(err.message)
      }
      setUsername('')
    },
    [username]
  )

  return {
    text,
    handleSubmit,
    username,
    usernameChange,
    printMsg,
    handleTextChange,
  }
}

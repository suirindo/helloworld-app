/*
import React from 'react'
import App from '@/App'
import { useRouter } from 'next/router'

const StatusPage = (): JSX.Element => {
  const router = useRouter()
  const { id, lang } = router.query

  return (
    <App>
      <p>
        このページのIDは{id}で言語は{lang}です
      </p>
    </App>
  )
}

export default StatusPage

*/
import React from 'react'
import App from '@/App'
import { useRouter } from 'next/router'

const StatusPage = (): JSX.Element => {
  const router = useRouter()
  const { id, lang } = router.query

  return (
    <App>
      <p>
        このページのIDは{id}で{lang}です。
      </p>
    </App>
  )
}

export default StatusPage

import React from 'react'
import App from '@/App'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

type StatusPageProps = { status: Status }

type Status = {
  id: string
  body: string
  author: string
  createdAt: string
}

const isStatus = (data: unknown): data is Status => {
  const d = data as Status
  if (typeof d.id !== 'string') {
    return false
  }
  if (typeof d.body !== 'string') {
    return false
  }
  if (typeof d.author !== 'string') {
    return false
  }
  if (typeof d.createdAt !== 'string') {
    return false
  }

  return true
}

export const getServerSideProps: GetServerSideProps<StatusPageProps> = async (
  // GetServerSideProps という名前でPromiseを返す非同期関数のexport
  context
) => {
  const res = await fetch(
    `http://localhost:3000/api/status?id=${context.query.id}`
  )
  const statusData = (await res.json()) as unknown
  if (!isStatus(statusData)) {
    return { notFound: true }
  }

  return { props: { status: statusData } }
}

const StatusPage: FC<StatusPageProps> = (props) => {
  return (
    <App>
      <Head>
        <title>{props.body}</title>
        <meta property="og:title" content={props.body} key="ogtitle" />
      </Head>
      <h1>{props.body}</h1>
      <p>{props.author}</p>
    </App>
  )
}
export default StatusPage

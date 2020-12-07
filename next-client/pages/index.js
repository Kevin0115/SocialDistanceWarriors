import Link from 'next/link'
import styles from '../styles.module.css'

export default function Home() {
  return (
    <div className={styles.hello}>
      <h1 className="title">
        Submit {' '}
        <Link href="/reports/create">
          <a>a report</a>
        </Link>
      </h1>
      <h1 className="title">
        Go to  {' '}
        <Link href="/reports/view">
          <a>reports</a>
        </Link>
      </h1>
      <h1 className="title">
        <Link href="/reporters/create">
          <a>Create user/reporter</a>
        </Link>
      </h1>
      <h1 className="title">
        <Link href="/reporters/view">
          <a>View all reporters</a>
        </Link>
      </h1>
    </div>
  )
}

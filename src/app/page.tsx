import { LoginForm } from '@/components/LoginForm';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: 'flex', height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center', }}>
        <LoginForm />
      </div>
    </main>
  );
}

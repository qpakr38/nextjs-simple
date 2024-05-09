import { Card, Stack } from "@mui/material";
import styles from "./page.module.css";
import LoginForm from "@/components/login/LoginForm";

export const generateMetadata = () => {
  return { title: `로그인` };
};
export default function Home() {
  return (
    <Card className={styles["login-form"]}>
      <LoginForm />
    </Card>
  );
}

import styles from "./button.module.css";
export const Button = ({
  onClick,
  type,
  children,
}: {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: any;
}) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
};

import styles from "./button.module.css";
export const Button = ({
  onClick,
  type,
  children,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  children: any;
}) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
};

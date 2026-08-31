import styles from './Button.module.css';

export default function ButtonLight({ children, href, className = '', ...props }) {
  const combinedClasses = `${styles.buttonLight} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

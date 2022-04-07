interface PProps {
  children: JSX.Element | string;
  className?: string;
}

export const P = ({children, className}: PProps) => {
  return (
    <p className={`text-center font-mono text-secondary-1 ${className? className : ''}`}>{children}</p>
  );
};

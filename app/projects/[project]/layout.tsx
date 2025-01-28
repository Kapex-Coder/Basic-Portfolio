export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Project Layout</h1>
      {children}
    </section>
  );
}

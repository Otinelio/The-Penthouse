import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '@/components/penthouse/Navbar';
import { Footer } from '@/components/penthouse/Footer';

export const Route = createFileRoute('/_public')({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <div className="min-h-screen bg-obsidian text-marble">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

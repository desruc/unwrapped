import { LoginButton } from "@/components/auth/LoginButton";
import { Footer } from "@/components/Footer";

export default function LoginPage() {
  return (
    <main className="h-screen px-4 grow">
      <div className="flex flex-col justify-center items-center h-full">
        <h2>unwrapped.</h2>
        <h3 className="mb-4 text-xs">powered by spotify</h3>
        <LoginButton />
      </div>
      <footer className="absolute bottom-4 right-4 text-right text-xs">
        <span>
          Made with ❤️ by{" "}
          <a href="https://jmscmrn.com" target="_blank" rel="noreferrer">
            James Cameron
          </a>
        </span>
      </footer>
    </main>
  );
}

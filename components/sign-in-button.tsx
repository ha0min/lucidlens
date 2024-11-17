import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button 
        type="submit"
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        Sign in with GitHub
      </button>
    </form>
  )
} 
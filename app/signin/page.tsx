import SignIn from '@/components/sign-in-button'
import { auth } from '@/auth'

export default async function SignInPage() {
  const session = await auth()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {session ? (
        <div className="text-center">
          <h1 className="text-2xl mb-4">Welcome, {session.user?.name}!</h1>
          <img 
            src={session.user?.image ?? ''} 
            alt="Profile" 
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p>Email: {session.user?.email}</p>
          <p>stringify: {JSON.stringify(session)}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl mb-4">Please Sign In</h1>
          <SignIn />
        </div>
      )}
    </div>
  )
} 
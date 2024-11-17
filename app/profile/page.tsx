import { auth } from "@/auth";
import { SignInPromptCard } from "@/components/sign-in-prompt-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

// Dummy data for the gallery
const dummyPosts = Array(9).fill(null).map((_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/400/400?random=${i}`,
  alt: `Gallery image ${i + 1}`
}));

export default async function ProfilePage() {
  const session = await auth()

  if (!session) {
    return <SignInPromptCard />
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 row-start-2 w-full max-w-4xl">
        {/* Profile Section */}
        <Card className="p-6 flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={session.user?.image ?? ''} alt={session.user?.name ?? ''} />
            <AvatarFallback>{session.user?.name?.[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h1 className="text-2xl font-bold">{session.user?.name}</h1>
            <p className="text-muted-foreground">{session.user?.email}</p>
          </div>
        </Card>

        {/* Gallery Grid */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dummyPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden group relative aspect-square"
              >
                <img
                  src={post.imageUrl}
                  alt={post.alt}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
  
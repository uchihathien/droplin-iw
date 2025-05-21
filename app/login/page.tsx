import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Store, MapPin } from "lucide-react"
import Link from "next/link"

// This login page now has direct access buttons that bypass authentication
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">PickupHub</span>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="max-w-md w-full mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">PickupHub Access</h1>
          <p className="text-muted-foreground">
            Select your user type to access the system directly (authentication bypassed)
          </p>
        </div>

        <div className="w-full max-w-md grid gap-4">
          <DirectAccessCard
            title="Buyer Access"
            description="Access the buyer dashboard to track your orders"
            icon={<Package className="h-6 w-6 text-blue-600" />}
            href="/dashboard/buyer"
          />

          <DirectAccessCard
            title="Company Access"
            description="Access the company dashboard to manage deliveries"
            icon={<Store className="h-6 w-6 text-blue-600" />}
            href="/dashboard/company"
          />

          <DirectAccessCard
            title="Service Point Access"
            description="Access the service point dashboard to manage pickups"
            icon={<MapPin className="h-6 w-6 text-blue-600" />}
            href="/dashboard/service-point"
          />
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© 2025 PickupHub. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DirectAccessCard({ title, description, icon, href }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href={href}>Access Dashboard</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

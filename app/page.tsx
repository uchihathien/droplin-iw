"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Package, Store, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">PickupHub</span>
          </div>
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="#">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#">Help</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="max-w-md w-full mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Log in to PickupHub</h1>
          <p className="text-muted-foreground">
            A system connecting buyers, sellers and service points to optimize delivery
          </p>
        </div>

        <Tabs defaultValue="seller" className="w-full max-w-md">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="buyer" className="flex flex-col items-center gap-2 py-3">
              <Package className="h-5 w-5" />
              <span>Buyer</span>
            </TabsTrigger>
            <TabsTrigger value="seller" className="flex flex-col items-center gap-2 py-3">
              <Store className="h-5 w-5" />
              <span>Company</span>
            </TabsTrigger>
            <TabsTrigger value="service-point" className="flex flex-col items-center gap-2 py-3">
              <MapPin className="h-5 w-5" />
              <span>Service Point</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buyer">
            <LoginCard
              title="Buyer Login"
              description="Pick up parcels at the nearest service point, save waiting time"
              userType="buyer"
              icon={<Package className="h-6 w-6 text-blue-600" />}
            />
          </TabsContent>

          <TabsContent value="seller">
            <CompanyLoginCard
              title="Company Login"
              description="Drop off orders at service points, no need to worry about delivery times"
              icon={<Store className="h-6 w-6 text-blue-600" />}
            />
          </TabsContent>

          <TabsContent value="service-point">
            <LoginCard
              title="Service Point Login"
              description="Manage receiving and delivering parcels at your service point"
              userType="service-point"
              icon={<MapPin className="h-6 w-6 text-blue-600" />}
            />
          </TabsContent>
        </Tabs>
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

function LoginCard({ title, description, userType, icon }) {
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
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor={`${userType}-email`}>Email</Label>
              <Input id={`${userType}-email`} type="email" placeholder="name@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor={`${userType}-password`}>Password</Label>
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id={`${userType}-password`} type="password" placeholder="••••••••" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={`${userType}-remember`} />
              <Label htmlFor={`${userType}-remember`} className="text-sm font-normal">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full">
              Log in
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <div className="text-sm text-muted-foreground mt-2">
          Don't have an account?{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Sign up now
          </Link>
        </div>
        {userType === "buyer" && (
          <div className="mt-4 text-sm text-center text-muted-foreground">
            <p>Log in to track your orders and receive notifications when parcels arrive at service points</p>
          </div>
        )}
        {userType === "seller" && (
          <div className="mt-4 text-sm text-center text-muted-foreground">
            <p>Log in to manage orders and drop off parcels at service points</p>
          </div>
        )}
        {userType === "service-point" && (
          <div className="mt-4 text-sm text-center text-muted-foreground">
            <p>Log in to manage parcels and confirm pickups/drop-offs</p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

function CompanyLoginCard({ title, description, icon }) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password")
      setIsLoading(false)
      return
    }

    // Check credentials (hardcoded for this example)
    if (email === "admin@gmail.com" && password === "123456") {
      // Simulate a brief loading state
      setTimeout(() => {
        // Redirect to company dashboard
        router.push("/dashboard/company")
      }, 1000)
    } else {
      setError("Invalid email or password")
      setIsLoading(false)
    }
  }

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
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company-email">Email</Label>
              <Input
                id="company-email"
                type="email"
                placeholder="admin@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="company-password">Password</Label>
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="company-password"
                type="password"
                placeholder="123456"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="flex items-center space-x-2">
              <Checkbox id="company-remember" />
              <Label htmlFor="company-remember" className="text-sm font-normal">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <div className="text-sm text-muted-foreground mt-2">
          Don't have an account?{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Sign up now
          </Link>
        </div>
        <div className="mt-4 text-sm text-center text-muted-foreground">
          <p>Log in to manage orders and drop off parcels at service points</p>
        </div>
        <div className="mt-2 text-xs text-center text-muted-foreground">
          <p>Demo credentials: admin@gmail.com / 123456</p>
        </div>
      </CardFooter>
    </Card>
  )
}

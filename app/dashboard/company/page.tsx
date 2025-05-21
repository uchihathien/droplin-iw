"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  Search,
  Bell,
  User,
  LogOut,
  Filter,
  MapPin,
  Phone,
  Calendar,
  Clock,
  CheckCircle2,
  Truck,
  Store,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CompanyDashboard() {
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens/cookies
    // For this demo, we just redirect to the login page
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/company" className="flex items-center gap-2">
              <Package className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">PickupHub</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <form className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search orders..." className="w-full rounded-lg pl-8 md:w-[300px]" />
            </form>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="FastShip Logistics" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin</p>
                    <p className="text-xs leading-none text-muted-foreground">admin@gmail.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/20">
        <div className="container py-6 px-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Order Management</h1>
            <p className="text-muted-foreground">Manage and track all orders your company is handling</p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>All Orders</DropdownMenuItem>
                  <DropdownMenuItem>Delivered to Service Point</DropdownMenuItem>
                  <DropdownMenuItem>Waiting for Pickup</DropdownMenuItem>
                  <DropdownMenuItem>Delivered to Buyer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <form className="relative sm:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search orders..." className="w-full rounded-lg pl-8 h-8" />
              </form>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <p className="text-sm text-muted-foreground">
                Showing <strong>24</strong> of <strong>124</strong> orders
              </p>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all" className="text-xs sm:text-sm">
                All Orders
              </TabsTrigger>
              <TabsTrigger value="service-point" className="text-xs sm:text-sm">
                At Service Point
              </TabsTrigger>
              <TabsTrigger value="waiting" className="text-xs sm:text-sm">
                Waiting for Pickup
              </TabsTrigger>
              <TabsTrigger value="delivered" className="text-xs sm:text-sm">
                Delivered
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <OrderCard
                  orderId="ORD-39281"
                  date="May 20, 2025"
                  buyer={{
                    name: "John Smith",
                    phone: "+1 (555) 123-4567",
                    email: "john.smith@example.com",
                  }}
                  servicePoint={{
                    name: "Downtown Hub",
                    address: "123 Main St, New York, NY 10001",
                    hours: "8:00 AM - 8:00 PM",
                  }}
                  status="at-service-point"
                  deliveredAt="May 20, 2025 - 10:23 AM"
                />
                <OrderCard
                  orderId="ORD-39275"
                  date="May 19, 2025"
                  buyer={{
                    name: "Emily Johnson",
                    phone: "+1 (555) 987-6543",
                    email: "emily.j@example.com",
                  }}
                  servicePoint={{
                    name: "Westside Point",
                    address: "456 West Ave, New York, NY 10012",
                    hours: "9:00 AM - 9:00 PM",
                  }}
                  status="waiting-pickup"
                  deliveredAt="May 19, 2025 - 2:45 PM"
                />
                <OrderCard
                  orderId="ORD-39268"
                  date="May 18, 2025"
                  buyer={{
                    name: "Michael Brown",
                    phone: "+1 (555) 456-7890",
                    email: "michael.b@example.com",
                  }}
                  servicePoint={{
                    name: "Eastside Hub",
                    address: "789 East Blvd, New York, NY 10021",
                    hours: "8:00 AM - 7:00 PM",
                  }}
                  status="delivered-to-buyer"
                  deliveredAt="May 18, 2025 - 5:30 PM"
                  pickedUpAt="May 19, 2025 - 11:15 AM"
                />
                <OrderCard
                  orderId="ORD-39254"
                  date="May 17, 2025"
                  buyer={{
                    name: "Sarah Wilson",
                    phone: "+1 (555) 234-5678",
                    email: "sarah.w@example.com",
                  }}
                  servicePoint={{
                    name: "Midtown Point",
                    address: "321 Center St, New York, NY 10036",
                    hours: "7:00 AM - 10:00 PM",
                  }}
                  status="at-service-point"
                  deliveredAt="May 17, 2025 - 9:10 AM"
                />
                <OrderCard
                  orderId="ORD-39247"
                  date="May 16, 2025"
                  buyer={{
                    name: "David Lee",
                    phone: "+1 (555) 876-5432",
                    email: "david.l@example.com",
                  }}
                  servicePoint={{
                    name: "Uptown Hub",
                    address: "654 North Ave, New York, NY 10029",
                    hours: "8:30 AM - 8:30 PM",
                  }}
                  status="waiting-pickup"
                  deliveredAt="May 16, 2025 - 3:20 PM"
                />
                <OrderCard
                  orderId="ORD-39236"
                  date="May 15, 2025"
                  buyer={{
                    name: "Jennifer Martinez",
                    phone: "+1 (555) 345-6789",
                    email: "jennifer.m@example.com",
                  }}
                  servicePoint={{
                    name: "Downtown Hub",
                    address: "123 Main St, New York, NY 10001",
                    hours: "8:00 AM - 8:00 PM",
                  }}
                  status="delivered-to-buyer"
                  deliveredAt="May 15, 2025 - 11:45 AM"
                  pickedUpAt="May 16, 2025 - 4:30 PM"
                />
              </div>
            </TabsContent>
            <TabsContent value="service-point" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <OrderCard
                  orderId="ORD-39281"
                  date="May 20, 2025"
                  buyer={{
                    name: "John Smith",
                    phone: "+1 (555) 123-4567",
                    email: "john.smith@example.com",
                  }}
                  servicePoint={{
                    name: "Downtown Hub",
                    address: "123 Main St, New York, NY 10001",
                    hours: "8:00 AM - 8:00 PM",
                  }}
                  status="at-service-point"
                  deliveredAt="May 20, 2025 - 10:23 AM"
                />
                <OrderCard
                  orderId="ORD-39254"
                  date="May 17, 2025"
                  buyer={{
                    name: "Sarah Wilson",
                    phone: "+1 (555) 234-5678",
                    email: "sarah.w@example.com",
                  }}
                  servicePoint={{
                    name: "Midtown Point",
                    address: "321 Center St, New York, NY 10036",
                    hours: "7:00 AM - 10:00 PM",
                  }}
                  status="at-service-point"
                  deliveredAt="May 17, 2025 - 9:10 AM"
                />
              </div>
            </TabsContent>
            <TabsContent value="waiting" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <OrderCard
                  orderId="ORD-39275"
                  date="May 19, 2025"
                  buyer={{
                    name: "Emily Johnson",
                    phone: "+1 (555) 987-6543",
                    email: "emily.j@example.com",
                  }}
                  servicePoint={{
                    name: "Westside Point",
                    address: "456 West Ave, New York, NY 10012",
                    hours: "9:00 AM - 9:00 PM",
                  }}
                  status="waiting-pickup"
                  deliveredAt="May 19, 2025 - 2:45 PM"
                />
                <OrderCard
                  orderId="ORD-39247"
                  date="May 16, 2025"
                  buyer={{
                    name: "David Lee",
                    phone: "+1 (555) 876-5432",
                    email: "david.l@example.com",
                  }}
                  servicePoint={{
                    name: "Uptown Hub",
                    address: "654 North Ave, New York, NY 10029",
                    hours: "8:30 AM - 8:30 PM",
                  }}
                  status="waiting-pickup"
                  deliveredAt="May 16, 2025 - 3:20 PM"
                />
              </div>
            </TabsContent>
            <TabsContent value="delivered" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <OrderCard
                  orderId="ORD-39268"
                  date="May 18, 2025"
                  buyer={{
                    name: "Michael Brown",
                    phone: "+1 (555) 456-7890",
                    email: "michael.b@example.com",
                  }}
                  servicePoint={{
                    name: "Eastside Hub",
                    address: "789 East Blvd, New York, NY 10021",
                    hours: "8:00 AM - 7:00 PM",
                  }}
                  status="delivered-to-buyer"
                  deliveredAt="May 18, 2025 - 5:30 PM"
                  pickedUpAt="May 19, 2025 - 11:15 AM"
                />
                <OrderCard
                  orderId="ORD-39236"
                  date="May 15, 2025"
                  buyer={{
                    name: "Jennifer Martinez",
                    phone: "+1 (555) 345-6789",
                    email: "jennifer.m@example.com",
                  }}
                  servicePoint={{
                    name: "Downtown Hub",
                    address: "123 Main St, New York, NY 10001",
                    hours: "8:00 AM - 8:00 PM",
                  }}
                  status="delivered-to-buyer"
                  deliveredAt="May 15, 2025 - 11:45 AM"
                  pickedUpAt="May 16, 2025 - 4:30 PM"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-blue-50">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

function OrderCard({ orderId, date, buyer, servicePoint, status, deliveredAt, pickedUpAt }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">{orderId}</div>
            <StatusBadge status={status} />
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Order Date: {date}</span>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="text-sm font-medium mb-2">Buyer Information</div>
          <div className="space-y-1">
            <div className="text-sm">{buyer.name}</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>{buyer.phone}</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="text-sm font-medium mb-2">Service Point</div>
          <div className="space-y-1">
            <div className="text-sm">{servicePoint.name}</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span>{servicePoint.address}</span>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Hours: {servicePoint.hours}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-muted/30">
          <div className="text-sm font-medium mb-2">Status Timeline</div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Truck className="h-4 w-4 text-blue-600 mt-0.5" />
              <div>
                <div className="text-sm font-medium">Delivered to Service Point</div>
                <div className="text-xs text-muted-foreground">{deliveredAt}</div>
              </div>
            </div>

            {status === "waiting-pickup" || status === "delivered-to-buyer" ? (
              <div className="flex items-start gap-2">
                <Store className="h-4 w-4 text-amber-500 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Waiting for Buyer Pickup</div>
                  <div className="text-xs text-muted-foreground">At {servicePoint.name}</div>
                </div>
              </div>
            ) : null}

            {status === "delivered-to-buyer" ? (
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Delivered to Buyer</div>
                  <div className="text-xs text-muted-foreground">{pickedUpAt}</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }) {
  if (status === "at-service-point") {
    return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800">At Service Point</Badge>
  }

  if (status === "waiting-pickup") {
    return (
      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 hover:text-amber-800">Waiting for Pickup</Badge>
    )
  }

  if (status === "delivered-to-buyer") {
    return (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800">Delivered to Buyer</Badge>
    )
  }

  return null
}

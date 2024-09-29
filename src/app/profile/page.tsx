'use client'

import { useState } from "react"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <Card className="w-full">
              <CardContent className="flex flex-col items-center py-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                </div>
              </CardContent>
            </Card>
            <nav className="mt-6 space-y-4 w-full">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/profile">Profile</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/notifications">Notifications</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/settings">Settings</Link>
              </Button>
              <Button variant="destructive" className="w-full flex items-center justify-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </nav>
          </div>
          <div className="md:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" readOnly={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="john.doe@example.com" type="email" readOnly={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about yourself" 
                    className="min-h-[100px]" 
                    readOnly={!isEditing}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
                {isEditing && <Button>Save</Button>}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
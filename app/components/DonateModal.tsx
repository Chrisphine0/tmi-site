"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

declare global {
  interface Window {
    paypal?: any
  }
}

export default function DonateModal() {
  const [amount, setAmount] = useState("")
  const [paypalEmail, setPaypalEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [paypalLoaded, setPaypalLoaded] = useState(false)

  useEffect(() => {
    if (window.paypal) {
      setPaypalLoaded(true)
    }
  }, [])

  const handlePayPalDonation = () => {
    if (window.paypal && amount && paypalEmail) {
      window.paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            })
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              toast({
                title: "Donation Successful",
                description: `Thank you for your donation of $${amount}!`,
              })
            })
          },
        })
        .render("#paypal-button-container")
    } else {
      toast({
        title: "Error",
        description: "Please enter both email and amount for PayPal donation.",
        variant: "destructive",
      })
    }
  }

  const handleMPesaDonation = async () => {
    if (amount && phoneNumber) {
      try {
        const response = await fetch("/api/mpesa", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, phoneNumber }),
        })
        const data = await response.json()
        if (data.success) {
          toast({
            title: "M-Pesa Payment Initiated",
            description: "Please check your phone to enter your PIN and complete the transaction.",
          })
        } else {
          toast({
            title: "Error",
            description: "Error initiating M-Pesa payment. Please try again.",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error("Error:", error)
        toast({
          title: "Error",
          description: "Error processing M-Pesa payment. Please try again.",
          variant: "destructive",
        })
      }
    } else {
      toast({
        title: "Error",
        description: "Please enter both phone number and amount for M-Pesa donation.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Donate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
          <DialogDescription>
            Choose your preferred payment method and enter the required information.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="paypal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="paypal">PayPal</TabsTrigger>
            <TabsTrigger value="mpesa">M-Pesa</TabsTrigger>
          </TabsList>
          <TabsContent value="paypal">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="paypal-email">PayPal Email</Label>
                <Input
                  id="paypal-email"
                  type="email"
                  placeholder="Enter your PayPal email"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paypal-amount">Amount (USD)</Label>
                <Input
                  id="paypal-amount"
                  placeholder="Enter amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              {paypalLoaded ? (
                <div id="paypal-button-container"></div>
              ) : (
                <Button onClick={handlePayPalDonation} className="w-full">
                  Donate with PayPal
                </Button>
              )}
            </div>
          </TabsContent>
          <TabsContent value="mpesa">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mpesa-phone">Phone Number</Label>
                <Input
                  id="mpesa-phone"
                  placeholder="Enter M-Pesa phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mpesa-amount">Amount (KES)</Label>
                <Input
                  id="mpesa-amount"
                  placeholder="Enter amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <Button onClick={handleMPesaDonation} className="w-full">
                Donate with M-Pesa
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}


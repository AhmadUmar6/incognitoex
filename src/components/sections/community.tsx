"use client";
import { MessageCircle, Users, Twitter, Send } from "lucide-react";
import { Section } from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/ui/ripple";

const communityMembers = [
  {
    name: "Alex Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    role: "DeFi Trader",
  },
  {
    name: "Maria Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    role: "Institutional Trader",
  },
  {
    name: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    role: "Crypto Analyst",
  },
  {
    name: "Sarah Thompson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    role: "Yield Farmer",
  },
  {
    name: "Michael Park",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    role: "Privacy Advocate",
  },
];

const communityLinks = [
  {
    name: "Discord",
    icon: <MessageCircle className="h-5 w-5" />,
    description: "Join our trading community",
    href: "#",
  },
  {
    name: "Telegram",
    icon: <Send className="h-5 w-5" />,
    description: "Get real-time updates",
    href: "#",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    description: "Follow our latest news",
    href: "#",
  },
];

export function Community() {
  return (
    <Section id="community" title="Community">
      <div className="border-x border-t overflow-hidden relative">
        <Ripple />
        <div className="p-6 text-center py-12">
          <p className="text-muted-foreground mb-6 text-balance max-w-prose mx-auto font-medium">
            We're grateful for the amazing trading community that helps
            make IncognitoEx better every day.
          </p>
          
          <div className="flex justify-center -space-x-6 mb-8">
            {communityMembers.map((member, index) => (
              <div key={index}>
                <Avatar className="size-12 relative border-2 border-background bg-muted">
                  <AvatarImage
                    src={member.avatar}
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-lg font-semibold">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="secondary" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Join Discord
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Join Telegram
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Contact() {
  return (
    <motion.section 
      className="container mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <Card className="max-w-2xl mx-auto bg-zinc-900/50 backdrop-blur-sm border-zinc-800">
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
          <CardDescription>
            I'm always interested in hearing about new projects and opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://github.com">
              <Github className="w-4 h-4" />
              Follow on GitHub
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://linkedin.com">
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://twitter.com">
              <Twitter className="w-4 h-4" />
              Follow on Twitter
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="mailto:email@example.com">
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.section>
  )
}


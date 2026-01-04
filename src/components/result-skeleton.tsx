"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ResultSkeleton() {
  return (
    <Card className="w-full max-w-md overflow-hidden glass-card border-none animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="pb-2">
        <Skeleton className="h-6 w-32 mx-auto rounded-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Video Preview Skeleton */}
        <Skeleton className="aspect-[9/16] w-full rounded-2xl shadow-2xl" />
        
        <div className="space-y-3 px-1">
          <Skeleton className="h-5 w-3/4 rounded-lg" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 pt-2">
        <Skeleton className="h-12 flex-1 rounded-xl" />
        <Skeleton className="h-12 w-12 rounded-xl" />
      </CardFooter>
    </Card>
  )
}

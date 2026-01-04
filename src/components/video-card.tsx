import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Share2 } from "lucide-react"

interface VideoCardProps {
    data: {
        id: string;
        url: string;
        thumbnail: string;
        title: string;
        author: string;
    } | null;
}

export function VideoCard({ data }: VideoCardProps) {
  // Don't render if no data
  if (!data) return null;

  return (
    <Card className="w-full max-w-md overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-center">Ready to Download</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Video / Thumbnail Preview */}
        <div className="aspect-[9/16] w-full bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden relative group shadow-inner">
             <video 
                src={data.url} 
                poster={data.thumbnail}
                controls 
                className="w-full h-full object-cover"
             />
        </div>
        
        <div className="space-y-1">
          <h3 className="font-medium text-sm truncate">{data.title}</h3>
          <p className="text-xs text-zinc-500">{data.author}</p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full" asChild>
          <a href={data.url} download={`${data.id}.mp4`} target="_blank" rel="noopener noreferrer">
             <Download className="mr-2 h-4 w-4" /> Download MP4
          </a>
        </Button>
        <Button variant="outline" size="icon">
             <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

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
    <Card className="w-full max-w-md overflow-hidden glass-card border-none animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="pb-3 text-center">
        <div className="mx-auto w-fit px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">
            Result Found
        </div>
        <CardTitle className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Download
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Video / Thumbnail Preview */}
        <div className="aspect-[9/16] w-full bg-black rounded-2xl overflow-hidden relative group shadow-2xl ring-1 ring-white/10">
             <video 
                src={data.url} 
                poster={data.thumbnail}
                controls 
                className="w-full h-full object-cover"
             />
             <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-tighter">
                HD Quality
             </div>
        </div>
        
        <div className="space-y-3 px-1">
          <h3 className="font-bold text-lg leading-tight line-clamp-2">{data.title}</h3>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
                {data.author.slice(0, 2).toUpperCase()}
             </div>
             <p className="text-sm font-medium text-zinc-400">@{data.author.toLowerCase().replace(/\s+/g, '')}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 pt-2">
        <Button className="flex-1 h-12 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all active:scale-95" asChild>
          <a href={data.url} download={`${data.id}.mp4`} target="_blank" rel="noopener noreferrer">
             <Download className="mr-2 h-5 w-5" /> Download MP4
          </a>
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl glass border-white/10 hover:bg-white/10 transition-all">
             <Share2 className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}


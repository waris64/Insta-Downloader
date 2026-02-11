import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Share2, Layers, Video as VideoIcon, Image as ImageIcon } from "lucide-react"
import { InstagramData } from "@/lib/instagram-service";
import NextImage from "next/image";

interface VideoCardProps {
    data: InstagramData | null;
}

export function VideoCard({ data }: VideoCardProps) {
  // Don't render if no data
  if (!data) return null;

  const sanitizedTitle = data.title 
    ? data.title.replace(/[\n\r\t]/g, ' ').replace(/[\\/:*?"<>|]/g, '').slice(0, 50).trim() || 'video'
    : 'instagram-video';

  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = `/api/proxy?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isCarousel = data.type === 'multiple' && data.medias.length > 1;

  return (
    <Card className="w-full max-w-xl overflow-hidden glass-card border-none animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="pb-3 text-center">
        <div className="mx-auto w-fit px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
            {isCarousel ? <Layers className="w-3 h-3" /> : null}
            {isCarousel ? 'Collection Found' : 'Result Found'}
        </div>
        <CardTitle className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Download
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Main Preview (Only if not showing carousel grid or as a hero) */}
        {!isCarousel ? (
            <div className="aspect-[9/16] w-full bg-black rounded-3xl overflow-hidden relative group shadow-2xl ring-1 ring-white/10">
                {data.type === 'video' ? (
                    <video 
                        src={data.url} 
                        poster={data.thumbnail}
                        controls 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <NextImage 
                        src={data.url} 
                        alt={data.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                )}
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-tighter">
                    {data.type === 'video' ? 'HD Video' : 'HQ Image'}
                </div>
            </div>
        ) : (
            <div className="grid grid-cols-2 gap-4">
                {data.medias.filter(m => m.type !== 'audio').map((media, index) => (
                    <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                        {media.type === 'video' ? (
                            <video src={media.url} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        ) : (
                            <NextImage 
                                src={media.url} 
                                alt="" 
                                fill 
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="absolute top-2 left-2 p-1.5 rounded-lg bg-black/50 backdrop-blur-sm text-white">
                            {media.type === 'video' ? <VideoIcon className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                        </div>

                        <Button 
                            size="icon"
                            onClick={() => downloadFile(media.url, `${sanitizedTitle}-${index + 1}${media.type === 'video' ? '.mp4' : '.jpg'}`)}
                            className="absolute bottom-2 right-2 h-8 w-8 rounded-xl bg-white text-black hover:bg-white/90 scale-0 group-hover:scale-100 transition-all duration-300 shadow-xl"
                        >
                            <Download className="w-4 h-4" />
                        </Button>
                    </div>
                ))}
            </div>
        )}
        
        <div className="space-y-3 px-1">
          <h3 className="font-bold text-lg leading-tight line-clamp-2">{data.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
                    {data.author.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-sm font-medium text-zinc-400">@{data.author.toLowerCase().replace(/\s+/g, '')}</p>
            </div>
            {isCarousel && (
                <span className="text-xs font-bold text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded-lg">
                    {data.medias.filter(m => m.type !== 'audio').length} items
                </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pt-2">
        <Button 
          onClick={() => {
            if (isCarousel) {
                // For carousel, maybe download the first one or just show notice?
                // Let's download the first one as default
                const first = data.medias.find(m => m.type !== 'audio') || data.medias[0];
                downloadFile(first.url, `${sanitizedTitle}-1${first.type === 'video' ? '.mp4' : '.jpg'}`);
            } else {
                downloadFile(data.url, `${sanitizedTitle}${data.type === 'video' ? '.mp4' : '.jpg'}`);
            }
          }}
          className="flex-1 h-12 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
        >
          <Download className="mr-2 h-5 w-5" /> {isCarousel ? 'Download Slide 1' : `Download ${data.type === 'video' ? 'MP4' : 'JPG'}`}
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl glass border-white/10 hover:bg-white/10 transition-all">
             <Share2 className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}


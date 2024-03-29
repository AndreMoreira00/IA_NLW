import { Button } from "./components/ui/button";
import { Github, FileVideo2, Upload, Wand, Wand2} from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { Select, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { SelectContent } from "./components/ui/select";
import { Slider } from "./components/ui/slider";


export function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-red-800">Desenvolvido com 🚀</span>
          <Separator orientation='vertical' className="h6" />
          <Button variant="destructive"><Github className="w-4 h-4 mr-2"/>GitHub</Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6 ">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea placeholder="Inclua o prompt para IA..." className="resize-none p-5 leading-relaxed"/>
            <Textarea placeholder="Resultado Gerado pela IA" readOnly className="resize-none p-5 leading-relaxed"/>
          </div>
          <p className="text-sm text-muted-foreground">Lembre-se: Você pode utilizar a variável <code className="text-red-400">{'{transcription}'}</code> no seu prompt paar adicionar o conteudo da trancrição do video selecionado </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"><FileVideo2 className="w-4 h-4"/>Selecione um Video</label>
            <input type="file" id="video" accept="video/mp4" className="sr-only"/>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea id="transcription_prompt" className="h-20 leading-relaxed resize-none" placeholder="Inclua palavras-chave mensionadas no video separadas por virgula (,)"/>
            </div>
            <Button type="submit" className="w-full">Carregar Video <Upload className="h-4 w-4 ml-2"/></Button>
          </form>

          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt..."/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Title">Titulo do Youtube</SelectItem>
                    <SelectItem value="Description">Descrição do Youtube</SelectItem>
                  </SelectContent>
                </Select> 
              </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">Voce poderá customizar nessa opção em breve </span>
            </div>
            <Separator />

            <div className="space-y-2">
              <Label>Temperatura</Label>
              <Slider 
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos deixam resultados mais criativos e com mais erros</span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">Executar <Wand2 className="w-4 h-4 ml-2"/></Button>
          </form>
        </aside>
      </main>

      
      
    </div>
  )
}

import {fastify} from 'fastify';
import {fastifyCors} from '@fastify/cors'
import { getAllPromptsRoutes } from './routes/get-all-prompts';
import { UploadVideo } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/createtrancripiton';
import { generateAiComplitionRoute } from './routes/generate_ai_complitions';

const app = fastify()

app.register(fastifyCors, {
  origin:'*',
})
app.register(getAllPromptsRoutes)
app.register(UploadVideo)
app.register(createTranscriptionRoute)
app.register(generateAiComplitionRoute)

app.listen({
  port: 3333,
}).then(() => {console.log('HTTP Server running!')
})
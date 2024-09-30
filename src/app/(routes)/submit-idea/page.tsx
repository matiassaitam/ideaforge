import IdeaForm from '@/components/ideas/idea-form'

export default function SubmitIdea() {
  return (
    <div className="container max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Submit Your Idea</h1>
      <IdeaForm />
    </div>
  )
}
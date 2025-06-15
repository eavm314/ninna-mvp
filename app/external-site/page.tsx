import { Suspense } from "react"
import { ExternalSite } from "@/components/screens/external-site"

function ExternalSiteContent() {
  return <ExternalSite />
}

export default function ExternalSitePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-blue-600 font-medium">Cargando sitio web seguro...</p>
          </div>
        </div>
      }
    >
      <ExternalSiteContent />
    </Suspense>
  )
}

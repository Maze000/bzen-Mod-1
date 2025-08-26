import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ActivacionGlandulaPineal from "./pages/ActivacionGlandulaPineal";
import TerapiaFloral from "./pages/TerapiaFloral";
import Aromaterapia from "./pages/Aromaterapia";
import TarotTerapeutico from "./pages/TarotTerapeutico";
import MeditacionGuiada from '@/pages/MeditacionGuiada';
import ApoyoEmocionalOnline from '@/pages/ApoyoEmocionalOnline';
import TerapiasCorporales from '@/pages/TerapiasCorporales';
import PsicologiaIntegrativa from '@/pages/PsicologiaIntegrativa';
import AncestrologiaConstelaciones from '@/pages/AncestrologiaConstelaciones';
import Auriculoterapia from '@/pages/Auriculoterapia';
import TerapiaEvolutivaSanacion from './pages/TerapiaEvolutivaSanacion';
import PsicoterapiaIndividual from './pages/PsicoterapiaIndividual';
import TerapiasComplementarias from './pages/TerapiasComplementarias';
import MindfulnessTerapiaEvolutiva from './pages/MindfulnessTerapiaEvolutiva';
import TalleresEmpresas from './pages/TalleresEmpresas';
import TallerCrecimiento from './pages/TallerCrecimiento';
import SobreBZEN from './pages/SobreBZEN';
import GemoterapiaDiploma from './pages/GemoterapiaDiploma';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/activacion-glandula-pineal" element={<ActivacionGlandulaPineal />} />
          <Route path="/terapia-floral" element={<TerapiaFloral />} />
          <Route path="/aromaterapia" element={<Aromaterapia />} />
          <Route path="/tarot-terapeutico" element={<TarotTerapeutico />} />
          <Route path="/meditacion-guiada" element={<MeditacionGuiada />} />
          <Route path="/apoyo-emocional-online" element={<ApoyoEmocionalOnline />} />
          <Route path="/terapias-corporales" element={<TerapiasCorporales />} />
          <Route path="/psicologia-integrativa" element={<PsicologiaIntegrativa />} />
          <Route path="/ancestrologia-constelaciones" element={<AncestrologiaConstelaciones />} />
          <Route path="/auriculoterapia" element={<Auriculoterapia />} />
          <Route path="/terapia-evolutiva-sanacion" element={<TerapiaEvolutivaSanacion />} />
          <Route path="/psicoterapia-individual" element={<PsicoterapiaIndividual />} />
          <Route path="/terapias-complementarias" element={<TerapiasComplementarias />} />
          <Route path="/mindfulness-terapia-evolutiva" element={<MindfulnessTerapiaEvolutiva />} />
          <Route path="/talleres-empresas" element={<TalleresEmpresas />} />
          <Route path="/taller-crecimiento" element={<TallerCrecimiento />} />
          <Route path="/sobre-bzen" element={<SobreBZEN />} />
          <Route path="/gemoterapia" element={<GemoterapiaDiploma />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

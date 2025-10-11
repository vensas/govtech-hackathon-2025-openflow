export interface BusinessProcess {
  id: string;
  name: string;
  description: string;
  score: number;
  successfulAdoptions: number;
  category: string;
  governmentResort: string;
  owner: ProcessOwner;
  sla?: string;
  systems?: string[];
  kpis?: KPI[];
  forms?: ProcessForm[];
  legalBases?: LegalBasis[];
  bpmnXml?: string;
  snippets: MatchSnippet[];
}

export interface ProcessOwner {
  department: string;
  contactPerson: string;
  email: string;
  phone?: string;
}

export interface KPI {
  name: string;
  value: string;
  unit?: string;
  target?: string;
}

export interface ProcessForm {
  name: string;
  url?: string;
  required: boolean;
}

export interface LegalBasis {
  title: string;
  reference: string;
  url?: string;
}

export interface MatchSnippet {
  text: string;
  source: string;
  similarity: number;
  highlighted?: boolean;
}

export interface SearchQuery {
  text: string;
  timestamp: Date;
}

export interface SearchResult {
  query: SearchQuery;
  processes: BusinessProcess[];
  totalFound: number;
  searchTime: number;
}
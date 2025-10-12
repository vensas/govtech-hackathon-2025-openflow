import React from 'react';
import { Message } from 'primereact/message';
import { BusinessProcess } from '../../types';
import { ProcessHeader } from './ProcessHeader';
import { BpmnDiagram } from './BpmnDiagram';
import { EvidenceSnippets } from './EvidenceSnippets';
import { ContactInfo } from './ContactInfo';
import { LegalBases } from './LegalBases';
import { RelatedDocuments } from './RelatedDocuments';

interface ProcessDetailsPanelProps {
  process: BusinessProcess | null;
}

export const ProcessDetailsPanel: React.FC<ProcessDetailsPanelProps> = ({ process }) => {
  if (!process) {
    return (
      <div style={{ padding: '1.5rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Message 
          severity="info" 
          style={{ maxWidth: '400px' }}
          text={
            <div>
              <h3>Select a Process</h3>
              <p>
                Choose a government process from the search results to view its details, 
                BPMN workflow diagram, and contact information.
              </p>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem', height: '100%', overflow: 'auto' }}>
      <ProcessHeader process={process} />
      
      {process.bpmnXml && <BpmnDiagram bpmnXml={process.bpmnXml} />}
      
      <EvidenceSnippets snippets={process.snippets} />
      
      <ContactInfo owner={process.owner} />
      
      {process.legalBases && <LegalBases legalBases={process.legalBases} />}
      
      {process.forms && <RelatedDocuments forms={process.forms} />}
    </div>
  );
};

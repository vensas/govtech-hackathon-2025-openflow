import React, { useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { Divider } from 'primereact/divider';
import { Message } from 'primereact/message';
import { BusinessProcess } from '../types';
import { colors } from '../theme';

interface ProcessDetailsPanelProps {
  process: BusinessProcess | null;
}

export const ProcessDetailsPanel: React.FC<ProcessDetailsPanelProps> = ({ process }) => {
  const bpmnContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (process?.bpmnXml && bpmnContainerRef.current) {
      // Here you would integrate with bpmn-js to render the BPMN diagram
      // For now, we'll show a placeholder
      bpmnContainerRef.current.innerHTML = `
        <div style="
          width: 100%; 
          height: 300px; 
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-family: Inter, sans-serif;
        ">
          <div style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
            <div>BPMN Diagram</div>
            <div style="font-size: 12px; margin-top: 8px;">Process: ${process.name}</div>
          </div>
        </div>
      `;
    }
  }, [process]);

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
                Choose a business process from the search results to view its details, 
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
      {/* Process Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: colors.primary.main, marginBottom: '0.5rem', fontWeight: 600 }}>
          {process.name}
        </h2>
        <p style={{ color: colors.text.secondary, marginBottom: '1rem' }}>
          {process.description}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Chip label={process.category} style={{ backgroundColor: colors.primary.main, color: 'white' }} />
          <Chip 
            label={`${Math.round(process.score * 100)}% Match`} 
            style={{ backgroundColor: colors.success, color: 'white' }}
          />
          {process.sla && (
            <Chip 
              icon="pi pi-clock" 
              label={`SLA: ${process.sla}`} 
            />
          )}
        </div>
      </div>

      {/* BPMN Diagram */}
      <Card style={{ marginBottom: '1.5rem' }}>
        <div style={{ padding: '1rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <i className="pi pi-file" style={{ color: colors.primary.main }} />
            Process Flow Diagram
          </h3>
          <div ref={bpmnContainerRef} />
        </div>
      </Card>

      {/* Contact Information */}
      <Card style={{ marginBottom: '1.5rem' }}>
        <div style={{ padding: '1rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <i className="pi pi-building" style={{ color: colors.primary.main }} />
            Contact Information
          </h3>
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              {process.owner.department}
            </h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
              {process.owner.contactPerson}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="pi pi-envelope" style={{ fontSize: '0.875rem', color: colors.primary.main }} />
                <a href={`mailto:${process.owner.email}`} style={{ fontSize: '0.875rem', color: colors.primary.main, textDecoration: 'none' }}>
                  {process.owner.email}
                </a>
              </div>
              {process.owner.phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="pi pi-phone" style={{ fontSize: '0.875rem', color: colors.primary.main }} />
                  <a href={`tel:${process.owner.phone}`} style={{ fontSize: '0.875rem', color: colors.primary.main, textDecoration: 'none' }}>
                    {process.owner.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Legal Bases */}
      {process.legalBases && process.legalBases.length > 0 && (
        <Card style={{ marginBottom: '1.5rem' }}>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <i className="pi pi-book" style={{ color: colors.primary.main }} />
              Legal Basis
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {process.legalBases.map((legal, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  {legal.url ? (
                    <a 
                      href={legal.url} 
                      target="_blank" 
                      rel="noopener"
                      style={{ color: colors.primary.main, textDecoration: 'none', fontWeight: 500 }}
                    >
                      {legal.title}
                    </a>
                  ) : (
                    <span style={{ fontWeight: 500 }}>{legal.title}</span>
                  )}
                  <div style={{ fontSize: '0.875rem', color: colors.text.secondary }}>{legal.reference}</div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      {/* Forms */}
      {process.forms && process.forms.length > 0 && (
        <Card style={{ marginBottom: '1.5rem' }}>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>
              Required Forms
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {process.forms.map((form, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  {form.url ? (
                    <a 
                      href={form.url} 
                      target="_blank" 
                      rel="noopener"
                      style={{ color: colors.primary.main, textDecoration: 'none', fontWeight: 500 }}
                    >
                      {form.name}
                    </a>
                  ) : (
                    <span style={{ fontWeight: 500 }}>{form.name}</span>
                  )}
                  <div style={{ fontSize: '0.875rem', color: colors.text.secondary }}>
                    {form.required ? 'Required' : 'Optional'}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      {/* KPIs */}
      {process.kpis && process.kpis.length > 0 && (
        <Card style={{ marginBottom: '1.5rem' }}>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>
              Key Performance Indicators
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {process.kpis.map((kpi, index) => (
                <div key={index} style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.875rem', color: colors.primary.main, marginBottom: '0.5rem', fontWeight: 500 }}>
                    {kpi.name}
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {kpi.value} {kpi.unit && <span style={{ fontSize: '0.8em' }}>{kpi.unit}</span>}
                  </div>
                  {kpi.target && (
                    <div style={{ fontSize: '0.75rem', color: colors.text.secondary }}>
                      Target: {kpi.target}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Evidence Snippets */}
      <Card>
        <div style={{ padding: '1rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>
            Matching Evidence
          </h3>
          {process.snippets.map((snippet, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: colors.primary[50], borderRadius: '8px' }}>
                <p style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{snippet.text}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: colors.text.secondary }}>
                    Source: {snippet.source}
                  </span>
                  <Chip 
                    label={`${Math.round(snippet.similarity * 100)}% match`}
                    style={{ fontSize: '0.75rem' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
import React, { useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import BpmnViewer from 'bpmn-js/lib/Viewer';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import { colors } from '../../theme';

interface BpmnDiagramProps {
  bpmnXml: string;
  title?: string;
}

export const BpmnDiagram: React.FC<BpmnDiagramProps> = ({ bpmnXml, title = 'Process Flow Diagram' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<BpmnViewer | null>(null);

  useEffect(() => {
    if (!bpmnXml || !containerRef.current) {
      return;
    }

    // Clean up previous viewer
    if (viewerRef.current) {
      viewerRef.current.destroy();
      viewerRef.current = null;
    }

    // Use setTimeout to ensure container is fully rendered in DOM
    const timeoutId = setTimeout(() => {
      if (!containerRef.current || !bpmnXml) return;

      // Create new BPMN viewer
      const viewer = new BpmnViewer({
        container: containerRef.current,
      });

      viewerRef.current = viewer;

      // Import and render BPMN diagram
      viewer.importXML(bpmnXml).then(() => {
        const canvas = viewer.get('canvas') as any;
        canvas.zoom('fit-viewport');
      }).catch((err) => {
        console.error('Error rendering BPMN diagram:', err);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="
              width: 100%; 
              height: 400px; 
              background: #fff3cd;
              border: 1px solid #ffc107;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #856404;
              font-family: Inter, sans-serif;
            ">
              <div style="text-align: center;">
                <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
                <div>Failed to render BPMN diagram</div>
                <div style="font-size: 12px; margin-top: 8px;">${err.message || 'Unknown error'}</div>
              </div>
            </div>
          `;
        }
      });
    }, 0);

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [bpmnXml]);

  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <i className="pi pi-file" style={{ color: colors.primary.main }} />
          {title}
        </h3>
        <div 
          ref={containerRef} 
          style={{ 
            width: '100%', 
            height: '400px', 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            backgroundColor: '#fafafa'
          }}
        />
      </div>
    </Card>
  );
};

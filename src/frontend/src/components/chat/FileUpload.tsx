import React, { useCallback, useState } from 'react';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { colors } from '../../theme';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  loading?: boolean;
  disabled?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  loading = false,
  disabled = false,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (disabled || loading) return;

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        const file = files[0];
        if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          setSelectedFile(file);
          onFileUpload(file);
        } else {
          alert('Please upload a PDF or DOCX file');
        }
      }
    },
    [disabled, loading, onFileUpload]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || loading) return;

      const files = e.target.files;
      if (files && files[0]) {
        const file = files[0];
        // add docx file support
        if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          setSelectedFile(file);
          onFileUpload(file);
        } else {
          alert('Please upload a PDF or DOCX file');
        }
      }
    },
    [disabled, loading, onFileUpload]
  );

  const handleRemove = useCallback(() => {
    setSelectedFile(null);
  }, []);

  return (
    <div>
      <input
        type="file"
        id="pdf-file-upload"
        accept=".pdf,application/pdf,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        disabled={disabled || loading}
      />

      {selectedFile ? (
        <div
          style={{
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.primary[50],
            border: '1px solid',
            borderColor: colors.primary.main,
            borderRadius: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <i className="pi pi-file" style={{ color: colors.primary.main, fontSize: '1.5rem' }} />
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                {selectedFile.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: colors.text.secondary }}>
                {(selectedFile.size / 1024).toFixed(1)} KB
              </div>
            </div>
            {loading && (
              <ProgressSpinner style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} strokeWidth="4" />
            )}
          </div>
          {!loading && (
            <Button
              icon="pi pi-times"
              onClick={handleRemove}
              disabled={disabled}
              text
              rounded
              severity="secondary"
            />
          )}
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          style={{
            padding: '2rem',
            textAlign: 'center',
            border: '2px dashed',
            borderColor: dragActive ? colors.primary.main : '#d0d0d0',
            backgroundColor: dragActive ? colors.primary[50] : 'white',
            cursor: disabled || loading ? 'not-allowed' : 'pointer',
            opacity: disabled || loading ? 0.6 : 1,
            transition: 'all 0.2s ease',
            borderRadius: '8px',
          }}
        >
          <i className="pi pi-cloud-upload" style={{ fontSize: '3rem', color: colors.primary.main, marginBottom: '0.5rem', display: 'block' }} />
          <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
            Drop PDF file here or
          </p>
          <Button
            label={loading ? 'Processing...' : 'Browse Files'}
            icon={loading ? undefined : 'pi pi-upload'}
            onClick={() => document.getElementById('pdf-file-upload')?.click()}
            disabled={disabled || loading}
            outlined
          />
          <p style={{ fontSize: '0.75rem', color: colors.text.secondary, marginTop: '0.5rem' }}>
            Supported format: PDF, DOCX (max 10MB)
          </p>
        </div>
      )}
    </div>
  );
};

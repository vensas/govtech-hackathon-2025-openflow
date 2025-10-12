import React, { useState, useRef } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { colors } from '../../theme';

interface ChatInputProps {
  onSubmit: (query: string, file?: File) => void;
  loading?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSubmit, loading = false }) => {
  const [query, setQuery] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Require either text or file
    if ((!query.trim() && !attachedFile) || loading) {
      return;
    }

    onSubmit(query.trim(), attachedFile || undefined);
    
    // Clear form after submit
    setQuery('');
    setAttachedFile(null);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if it's a PDF
      if (file.type === 'application/pdf') {
        setAttachedFile(file);
      } else {
        alert('Please upload a PDF file');
      }
    }
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        disabled={loading}
      />

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0',
      }}>
        {/* Attached File Display */}
        {attachedFile && (
          <div style={{
            marginBottom: '0.75rem',
            padding: '0.5rem',
            backgroundColor: colors.primary[50],
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="pi pi-file-pdf" style={{ color: colors.primary.main, fontSize: '1.25rem' }} />
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  {attachedFile.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: colors.text.secondary }}>
                  {(attachedFile.size / 1024).toFixed(1)} KB
                </div>
              </div>
            </div>
            <Button
              icon="pi pi-times"
              onClick={handleRemoveFile}
              disabled={loading}
              text
              rounded
              severity="secondary"
              size="small"
            />
          </div>
        )}

        {/* Text Input */}
        <InputTextarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about government processes or attach a document... (Press Enter to send, Shift+Enter for new line)"
          disabled={loading}
          autoFocus
          rows={3}
          autoResize
          style={{
            width: '100%',
            fontSize: '1rem',
            border: 'none',
            outline: 'none',
            resize: 'none',
            padding: '0.5rem',
          }}
        />

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '0.75rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid #e0e0e0',
        }}>
          <div>
            <Button
              icon="pi pi-paperclip"
              label="Attach Document (.pdf, .docx)"
              onClick={() => fileInputRef.current?.click()}
              disabled={loading || !!attachedFile}
              text
              size="small"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {loading && (
              <>
                <ProgressSpinner style={{ width: '20px', height: '20px' }} strokeWidth="4" />
                <span style={{ fontSize: '0.875rem', color: colors.text.secondary }}>
                  Processing...
                </span>
              </>
            )}
            <Button
              icon="pi pi-send"
              label="Send"
              onClick={handleSubmit}
              disabled={loading || (!query.trim() && !attachedFile)}
              type="submit"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

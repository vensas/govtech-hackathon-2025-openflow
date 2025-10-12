import React from 'react';
import { Card } from 'primereact/card';
import { ProcessOwner } from '../../types';
import { colors } from '../../theme';

interface ContactInfoProps {
  owner: ProcessOwner;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ owner }) => {
  // Generate organizational hierarchy based on department
  const getOrganizationalHierarchy = () => {
    // Parse department structure (e.g., "Ministry of Finance > Procurement Department")
    const parts = owner.department.split('>').map(p => p.trim());
    
    return parts.length > 1 ? parts : ['Government', owner.department];
  };

  const hierarchy = getOrganizationalHierarchy();

  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <i className="pi pi-building" style={{ color: colors.primary.main }} />
          Contact Information
        </h3>
        
        {/* Organizational Hierarchy */}
        <div style={{ 
          marginBottom: '1.5rem', 
          padding: '1rem', 
          backgroundColor: colors.primary[50],
          borderRadius: '8px',
          borderLeft: `3px solid ${colors.primary.main}`
        }}>
          <h4 style={{ 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            color: colors.text.secondary,
            marginBottom: '0.75rem',
            fontWeight: 600
          }}>
            Organizational Structure
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {hierarchy.map((level, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ 
                  width: `${index * 1.5}rem`, 
                  height: '1px', 
                  backgroundColor: index > 0 ? colors.primary.light : 'transparent' 
                }} />
                <i 
                  className={index === 0 ? 'pi pi-sitemap' : index === hierarchy.length - 1 ? 'pi pi-users' : 'pi pi-chevron-right'} 
                  style={{ 
                    fontSize: '0.875rem', 
                    color: index === hierarchy.length - 1 ? colors.primary.main : colors.text.secondary 
                  }} 
                />
                <span style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: index === hierarchy.length - 1 ? 600 : 400,
                  color: index === hierarchy.length - 1 ? colors.primary.main : colors.text.primary
                }}>
                  {level}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
            Owner
          </h4>
          <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
            {owner.contactPerson}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="pi pi-envelope" style={{ fontSize: '0.875rem', color: colors.primary.main }} />
              <a href={`mailto:${owner.email}`} style={{ fontSize: '0.875rem', color: colors.primary.main, textDecoration: 'none' }}>
                {owner.email}
              </a>
            </div>
            {owner.phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="pi pi-phone" style={{ fontSize: '0.875rem', color: colors.primary.main }} />
                <a href={`tel:${owner.phone}`} style={{ fontSize: '0.875rem', color: colors.primary.main, textDecoration: 'none' }}>
                  {owner.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

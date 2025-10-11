import React from 'react';
import { Card } from 'primereact/card';
import { ProcessOwner } from '../types';
import { colors } from '../theme';

interface ContactInfoProps {
  owner: ProcessOwner;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ owner }) => {
  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <i className="pi pi-building" style={{ color: colors.primary.main }} />
          Contact Information
        </h3>
        <div style={{ marginTop: '1rem' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
            {owner.department}
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

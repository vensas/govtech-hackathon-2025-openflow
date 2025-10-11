import React, { useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Alert,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  Schedule as ScheduleIcon,
  Description as DescriptionIcon,
  Gavel as GavelIcon,
} from '@mui/icons-material';
import { BusinessProcess } from '../types';

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
      <Box p={3} height="100%" display="flex" alignItems="center" justifyContent="center">
        <Alert severity="info" sx={{ maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Select a Process
          </Typography>
          <Typography variant="body2">
            Choose a business process from the search results to view its details, 
            BPMN workflow diagram, and contact information.
          </Typography>
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={3} sx={{ height: '100%', overflow: 'auto' }}>
      {/* Process Header */}
      <Box mb={3}>
        <Typography variant="h4" color="primary" gutterBottom fontWeight={600}>
          {process.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {process.description}
        </Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          <Chip label={process.category} color="primary" />
          <Chip 
            label={`${Math.round(process.score * 100)}% Match`} 
            color="success" 
            variant="outlined" 
          />
          {process.sla && (
            <Chip 
              icon={<ScheduleIcon />} 
              label={`SLA: ${process.sla}`} 
              variant="outlined" 
            />
          )}
        </Box>
      </Box>

      {/* BPMN Diagram */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
            <DescriptionIcon color="primary" />
            Process Flow Diagram
          </Typography>
          <Box ref={bpmnContainerRef} />
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
            <BusinessIcon color="primary" />
            Contact Information
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              {process.owner.department}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {process.owner.contactPerson}
            </Typography>
            <Box display="flex" flexDirection="column" gap={1} mt={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon fontSize="small" color="primary" />
                <Typography variant="body2" component="a" href={`mailto:${process.owner.email}`}>
                  {process.owner.email}
                </Typography>
              </Box>
              {process.owner.phone && (
                <Box display="flex" alignItems="center" gap={1}>
                  <PhoneIcon fontSize="small" color="primary" />
                  <Typography variant="body2" component="a" href={`tel:${process.owner.phone}`}>
                    {process.owner.phone}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Legal Bases */}
      {process.legalBases && process.legalBases.length > 0 && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
              <GavelIcon color="primary" />
              Legal Basis
            </Typography>
            <List dense>
              {process.legalBases.map((legal, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemText
                    primary={
                      legal.url ? (
                        <Typography 
                          component="a" 
                          href={legal.url} 
                          target="_blank" 
                          rel="noopener"
                          color="primary"
                          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                          {legal.title}
                        </Typography>
                      ) : (
                        <Typography>{legal.title}</Typography>
                      )
                    }
                    secondary={legal.reference}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      {/* Forms */}
      {process.forms && process.forms.length > 0 && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Required Forms
            </Typography>
            <List dense>
              {process.forms.map((form, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemText
                    primary={
                      form.url ? (
                        <Typography 
                          component="a" 
                          href={form.url} 
                          target="_blank" 
                          rel="noopener"
                          color="primary"
                          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                          {form.name}
                        </Typography>
                      ) : (
                        <Typography>{form.name}</Typography>
                      )
                    }
                    secondary={form.required ? 'Required' : 'Optional'}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      {/* KPIs */}
      {process.kpis && process.kpis.length > 0 && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Key Performance Indicators
            </Typography>
            <Grid container spacing={2}>
              {process.kpis.map((kpi, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper sx={{ p: 2, backgroundColor: 'grey.50' }}>
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      {kpi.name}
                    </Typography>
                    <Typography variant="h6">
                      {kpi.value} {kpi.unit && <span style={{ fontSize: '0.8em' }}>{kpi.unit}</span>}
                    </Typography>
                    {kpi.target && (
                      <Typography variant="caption" color="text.secondary">
                        Target: {kpi.target}
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )}

      {/* Evidence Snippets */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Matching Evidence
          </Typography>
          {process.snippets.map((snippet, index) => (
            <Box key={index} mb={2}>
              <Paper sx={{ p: 2, backgroundColor: 'primary.50' }}>
                <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>
                  "{snippet.text}"
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="caption" color="text.secondary">
                    Source: {snippet.source}
                  </Typography>
                  <Chip 
                    label={`${Math.round(snippet.similarity * 100)}% match`}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </Paper>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};
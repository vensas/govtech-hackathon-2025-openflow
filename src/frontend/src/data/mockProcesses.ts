import { BusinessProcess } from '../types';

export const mockProcesses: BusinessProcess[] = [
  {
    id: '1',
    name: 'Procurement Process (>10k EUR)',
    description:
      'Standardized procurement workflow for purchases exceeding 10,000 EUR, including tender requirements, approval workflows, and compliance checks.',
    score: 0.95,
    category: 'Procurement',
    owner: {
      department: 'Procurement Office',
      contactPerson: 'Maria Schmidt',
      email: 'maria.schmidt@gov.example',
      phone: '+49 30 12345-678',
    },
    sla: '15 business days',
    systems: ['ERP-PRO', 'DocuSign', 'Compliance-Check'],
    kpis: [
      { name: 'Processing Time', value: '12', unit: 'days', target: '15 days' },
      { name: 'Success Rate', value: '94', unit: '%', target: '95%' },
      { name: 'Cost Savings', value: '8.5', unit: '%', target: '10%' },
    ],
    forms: [
      { name: 'Procurement Request Form', url: '#', required: true },
      { name: 'Budget Approval Form', url: '#', required: true },
      { name: 'Vendor Assessment Sheet', url: '#', required: true },
    ],
    legalBases: [
      { title: 'Public Procurement Act', reference: 'PPA §23-45', url: '#' },
      { title: 'EU Procurement Directive', reference: '2014/24/EU', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'All procurement activities exceeding 10,000 EUR must follow the standardized tender process including public announcement and evaluation committee review.',
        source: 'Procurement Guidelines v2.3',
        similarity: 0.94,
      },
      {
        text: 'The procurement officer must ensure all legal requirements are met before initiating the tender process.',
        source: 'Legal Compliance Manual',
        similarity: 0.87,
      },
    ],
  },
  {
    id: '2',
    name: 'Employee Onboarding Process',
    description:
      'Comprehensive onboarding workflow for new employees including documentation, system access, training schedule, and compliance requirements.',
    score: 0.89,
    category: 'Human Resources',
    owner: {
      department: 'Human Resources',
      contactPerson: 'Thomas Mueller',
      email: 'thomas.mueller@gov.example',
      phone: '+49 30 12345-679',
    },
    sla: '5 business days',
    systems: ['HR-System', 'Active Directory', 'Training Portal'],
    kpis: [
      { name: 'Onboarding Time', value: '4', unit: 'days', target: '5 days' },
      { name: 'Completion Rate', value: '98', unit: '%', target: '100%' },
      { name: 'Employee Satisfaction', value: '4.5', unit: '/5', target: '4.0/5' },
    ],
    forms: [
      { name: 'Personal Data Form', url: '#', required: true },
      { name: 'Security Clearance Form', url: '#', required: true },
      { name: 'Equipment Request', url: '#', required: false },
      { name: 'Bank Details Form', url: '#', required: true },
    ],
    legalBases: [
      {
        title: 'Data Protection Regulation',
        reference: 'GDPR Art. 6',
        url: '#',
      },
      { title: 'Employment Standards Act', reference: 'ESA §12', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'New employee onboarding must be completed within 5 business days and includes security training, system access setup, and documentation collection.',
        source: 'HR Policy Manual v3.1',
        similarity: 0.82,
      },
      {
        text: 'All new hires must complete mandatory data protection training before accessing internal systems.',
        source: 'IT Security Guidelines',
        similarity: 0.78,
      },
    ],
  },
  {
    id: '3',
    name: 'Invoice Approval Workflow',
    description:
      'Multi-level approval process for incoming invoices, including verification, budget checking, payment authorization, and archiving.',
    score: 0.92,
    category: 'Finance',
    owner: {
      department: 'Finance Department',
      contactPerson: 'Anna Weber',
      email: 'anna.weber@gov.example',
      phone: '+49 30 12345-680',
    },
    sla: '10 business days',
    systems: ['SAP FI', 'Invoice Scanner', 'Payment Gateway'],
    kpis: [
      { name: 'Average Approval Time', value: '7', unit: 'days', target: '10 days' },
      { name: 'Error Rate', value: '2', unit: '%', target: '5%' },
      { name: 'On-time Payments', value: '96', unit: '%', target: '95%' },
    ],
    forms: [
      { name: 'Invoice Submission Form', url: '#', required: true },
      { name: 'Budget Authorization Form', url: '#', required: true },
    ],
    legalBases: [
      { title: 'Financial Management Act', reference: 'FMA §45', url: '#' },
      { title: 'Tax Code', reference: 'TC §78-82', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'Invoice approval requires verification of goods/services receipt, budget availability check, and department head authorization.',
        source: 'Finance Process Manual',
        similarity: 0.91,
      },
      {
        text: 'All invoices over 5,000 EUR require additional approval from the finance director.',
        source: 'Approval Authority Matrix',
        similarity: 0.85,
      },
    ],
  },
  {
    id: '4',
    name: 'Building Permit Application',
    description:
      'End-to-end workflow for processing building permit applications, including document review, technical assessment, public consultation, and permit issuance.',
    score: 0.87,
    category: 'Urban Planning',
    owner: {
      department: 'Planning & Development',
      contactPerson: 'Klaus Becker',
      email: 'klaus.becker@gov.example',
      phone: '+49 30 12345-681',
    },
    sla: '30 business days',
    systems: ['Permit Management System', 'GIS Portal', 'Document Archive'],
    kpis: [
      { name: 'Average Processing Time', value: '28', unit: 'days', target: '30 days' },
      { name: 'Approval Rate', value: '78', unit: '%', target: '75%' },
      { name: 'Appeal Rate', value: '5', unit: '%', target: '10%' },
    ],
    forms: [
      { name: 'Building Permit Application', url: '#', required: true },
      { name: 'Architectural Plans', url: '#', required: true },
      { name: 'Environmental Impact Assessment', url: '#', required: false },
      { name: 'Neighbor Notification Form', url: '#', required: true },
    ],
    legalBases: [
      { title: 'Building Code', reference: 'BC §12-25', url: '#' },
      { title: 'Urban Planning Act', reference: 'UPA §8', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'Building permit applications must include complete architectural plans, structural calculations, and proof of property ownership.',
        source: 'Building Permit Guidelines',
        similarity: 0.88,
      },
      {
        text: 'Public consultation is mandatory for projects exceeding 500 square meters or affecting protected areas.',
        source: 'Urban Development Policy',
        similarity: 0.82,
      },
    ],
  },
  {
    id: '5',
    name: 'Intern Onboarding Process',
    description:
      'Streamlined onboarding workflow specifically designed for interns and temporary staff, including short-term access provisioning and orientation.',
    score: 0.85,
    category: 'Human Resources',
    owner: {
      department: 'Human Resources',
      contactPerson: 'Thomas Mueller',
      email: 'thomas.mueller@gov.example',
      phone: '+49 30 12345-679',
    },
    sla: '3 business days',
    systems: ['HR-System', 'Active Directory', 'Access Management'],
    kpis: [
      { name: 'Onboarding Time', value: '2', unit: 'days', target: '3 days' },
      { name: 'Completion Rate', value: '100', unit: '%', target: '100%' },
    ],
    forms: [
      { name: 'Internship Agreement', url: '#', required: true },
      { name: 'Personal Data Form', url: '#', required: true },
      { name: 'Temporary Access Request', url: '#', required: true },
    ],
    legalBases: [
      { title: 'Data Protection Regulation', reference: 'GDPR Art. 6', url: '#' },
      { title: 'Internship Regulations', reference: 'IR §3', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'Intern onboarding follows a simplified process with temporary system access and basic orientation training.',
        source: 'HR Policy Manual v3.1',
        similarity: 0.86,
      },
    ],
  },
  {
    id: '6',
    name: 'Travel Request & Reimbursement',
    description:
      'Complete workflow for business travel approval, booking, expense reporting, and reimbursement processing.',
    score: 0.81,
    category: 'Finance',
    owner: {
      department: 'Finance Department',
      contactPerson: 'Anna Weber',
      email: 'anna.weber@gov.example',
      phone: '+49 30 12345-680',
    },
    sla: '7 business days',
    systems: ['Travel Management System', 'Expense Tracker', 'SAP FI'],
    kpis: [
      { name: 'Approval Time', value: '2', unit: 'days', target: '3 days' },
      { name: 'Reimbursement Time', value: '5', unit: 'days', target: '7 days' },
      { name: 'Compliance Rate', value: '97', unit: '%', target: '95%' },
    ],
    forms: [
      { name: 'Travel Request Form', url: '#', required: true },
      { name: 'Expense Report', url: '#', required: true },
      { name: 'Receipt Documentation', url: '#', required: true },
    ],
    legalBases: [
      { title: 'Travel Expense Regulation', reference: 'TER §5-12', url: '#' },
      { title: 'Tax Code', reference: 'TC §45', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'All business travel must be pre-approved by the department head and comply with the travel expense regulations.',
        source: 'Travel Policy Manual',
        similarity: 0.79,
      },
    ],
  },
  {
    id: '7',
    name: 'Document Archive Request',
    description:
      'Process for requesting access to archived documents, including request validation, retrieval authorization, and secure delivery.',
    score: 0.76,
    category: 'Records Management',
    owner: {
      department: 'Records & Archive Office',
      contactPerson: 'Sabine Hoffmann',
      email: 'sabine.hoffmann@gov.example',
      phone: '+49 30 12345-682',
    },
    sla: '5 business days',
    systems: ['Archive Management System', 'Document Portal'],
    kpis: [
      { name: 'Retrieval Time', value: '4', unit: 'days', target: '5 days' },
      { name: 'Accuracy Rate', value: '99', unit: '%', target: '98%' },
    ],
    forms: [
      { name: 'Archive Request Form', url: '#', required: true },
      { name: 'Authorization Form', url: '#', required: true },
    ],
    legalBases: [
      { title: 'Records Management Act', reference: 'RMA §12', url: '#' },
      { title: 'Data Protection Regulation', reference: 'GDPR Art. 6', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'Archive requests must include proper authorization and comply with data protection regulations.',
        source: 'Archive Policy Guidelines',
        similarity: 0.74,
      },
    ],
  },
  {
    id: '8',
    name: 'IT Equipment Procurement',
    description:
      'Specialized procurement process for IT hardware and software, including technical specifications, vendor selection, and asset management.',
    score: 0.88,
    category: 'IT & Technology',
    owner: {
      department: 'IT Department',
      contactPerson: 'Michael Schulz',
      email: 'michael.schulz@gov.example',
      phone: '+49 30 12345-683',
    },
    sla: '12 business days',
    systems: ['Asset Management', 'Procurement System', 'Inventory DB'],
    kpis: [
      { name: 'Processing Time', value: '10', unit: 'days', target: '12 days' },
      { name: 'Budget Compliance', value: '95', unit: '%', target: '90%' },
    ],
    forms: [
      { name: 'IT Equipment Request', url: '#', required: true },
      { name: 'Technical Specification Sheet', url: '#', required: true },
      { name: 'Budget Approval', url: '#', required: true },
    ],
    legalBases: [
      { title: 'Public Procurement Act', reference: 'PPA §23-45', url: '#' },
      { title: 'IT Security Policy', reference: 'ITSP §7', url: '#' },
    ],
    bpmnXml: '<bpmn>mock xml</bpmn>',
    snippets: [
      {
        text: 'IT equipment procurement requires technical specification approval and compliance with IT security standards.',
        source: 'IT Procurement Guidelines',
        similarity: 0.90,
      },
    ],
  },
];


export type UserRole = 'patient' | 'doctor' | 'pharmacist' | 'insurance' | 'laboratory';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Visit {
  id: string;
  patientId: string;
  doctorId: string;
  date: Date;
  reason: string;
  notes: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  visitId: string;
  date: Date;
  diagnosis: string;
  treatment: string;
  notes: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  visitId: string;
  date: Date;
  medications: Medication[];
  status: 'issued' | 'filled' | 'expired';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  quantity: number;
}

export interface MedicationTransaction {
  id: string;
  prescriptionId: string;
  pharmacistId: string;
  date: Date;
  medications: Medication[];
}

export interface Analysis {
  id: string;
  patientId: string;
  laboratoryId: string;
  requestDate: Date;
  completionDate: Date | null;
  type: string;
  results: string | null;
  status: 'requested' | 'in-progress' | 'completed';
}

export interface Document {
  id: string;
  title: string;
  type: 'report' | 'prescription' | 'analysis' | 'invoice' | 'other';
  fileUrl: string;
  uploadedBy: string;
  uploadDate: Date;
  relatedEntityId?: string;
  relatedEntityType?: 'visit' | 'prescription' | 'analysis' | 'reimbursement';
}

export interface ReimbursementRequest {
  id: string;
  patientId: string;
  requesterId: string;
  // Changed from 'doctor' | 'pharmacist' | 'laboratory' to exclude patient since patients don't make reimbursement requests
  requesterType: 'doctor' | 'pharmacist' | 'laboratory';
  date: Date;
  amount: number;
  description: string;
  relatedEntityId: string;
  relatedEntityType: 'visit' | 'prescription' | 'analysis';
  status: 'submitted' | 'under-review' | 'approved' | 'rejected' | 'paid';
  documents: Document[];
}

export interface Insurance {
  id: string;
  patientId: string;
  provider: string;
  policyNumber: string;
  coverageStartDate: Date;
  coverageEndDate: Date;
  coverageDetails: string;
  status: 'active' | 'expired' | 'cancelled';
}

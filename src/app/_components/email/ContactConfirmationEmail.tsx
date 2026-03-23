import { Text, Section } from '@react-email/components';
import * as React from 'react';
import { FonciorEmailLayout } from './FonciorEmailLayout';

interface ContactConfirmationProps {
  nom: string;
  prenom: string;
  messageClient: string;
}

export const ContactConfirmationEmail = ({
  nom,
  prenom,
  messageClient,
}: ContactConfirmationProps) => {
  return (
    <FonciorEmailLayout previewText="Confirmation de votre demande de contact - Foncior">
      <Text style={greeting}>
        Bonjour {prenom} {nom},
      </Text>
      
      <Text style={mainText}>
        Nous vous confirmons la bonne réception de votre demande de contact. Notre équipe reviendra vers vous dans les plus brefs délais.
      </Text>

      <Section style={messageContainer}>
        <Text style={label}>Votre message :</Text>
        <Text style={clientMessage}>
          "{messageClient}"
        </Text>
      </Section>

      <Text style={signature}>
        L'équipe Foncior
      </Text>
    </FonciorEmailLayout>
  );
};

const greeting = {
  color: '#006b54',
  fontWeight: 'bold',
  fontSize: '18px',
  marginBottom: '20px',
};

const mainText = {
  color: '#333',
  lineHeight: '1.6',
  fontSize: '16px',
};

const messageContainer = {
  backgroundColor: '#f1f1f1',
  padding: '15px',
  borderRadius: '4px',
  marginTop: '25px',
  marginBottom: '25px',
};

const label = {
  fontWeight: 'bold',
  margin: '0 0 10px 0',
  color: '#333',
};

const clientMessage = {
  margin: '0',
  fontStyle: 'italic',
  color: '#555',
  lineHeight: '1.5',
};

const signature = {
  color: '#006b54',
  fontWeight: 'bold',
  marginTop: '30px',
};
import { Text, Section, Link } from '@react-email/components';
import * as React from 'react';
import { FonciorEmailLayout } from './FonciorEmailLayout';

interface NewBetaAdminEmailProps {
  prenom: string;
  nom: string;
  email: string;
}

export const NewBetaAdminEmail = ({
  prenom,
  nom,
  email,
}: NewBetaAdminEmailProps) => {
  return (
    <FonciorEmailLayout previewText={`Nouvelle inscription Bêta : ${prenom} ${nom}`}>
      <Text style={greeting}>
        Hello l'équipe Foncior ! 👋
      </Text>
      
      <Text style={mainText}>
        Excellente nouvelle : une nouvelle personne souhaite rejoindre la bêta fermée de l'ERP Foncior.
      </Text>

      <Section style={infoBox}>
        <Text style={label}>Détails du prospect :</Text>
        <Text style={infoText}>
          <strong>Client :</strong> M. ou Mme {prenom} {nom}
        </Text>
        <Text style={infoText}>
          <strong>Email :</strong> <Link href={`mailto:${email}`} style={link}>{email}</Link>
        </Text>
      </Section>
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

const infoBox = {
  backgroundColor: '#f1f1f1',
  padding: '20px',
  borderRadius: '6px',
  marginTop: '25px',
  marginBottom: '25px',
  borderLeft: '4px solid #f4b942',
};

const label = {
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
  fontSize: '16px',
};

const infoText = {
  margin: '5px 0',
  color: '#555',
  fontSize: '15px',
};

const link = {
  color: '#006b54',
  textDecoration: 'underline',
};
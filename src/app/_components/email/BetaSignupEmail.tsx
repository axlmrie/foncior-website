import { Text, Section } from '@react-email/components';
import * as React from 'react';
import { FonciorEmailLayout } from './FonciorEmailLayout';

interface BetaSignupEmailProps {
  prenom: string;
  nom: string;
}

export const BetaSignupEmail = ({
  prenom,
  nom,
}: BetaSignupEmailProps) => {
  return (
    <FonciorEmailLayout previewText="Bienvenue dans la bêta fermée de Foncior !">
      <Text style={greeting}>
        Bonjour {prenom} {nom},
      </Text>
      
      <Text style={mainText}>
        Nous vous confirmons votre inscription pour rejoindre la version Bêta de Foncior. Toute l'équipe est ravie de vous compter parmi nos premiers testeurs privilégiés !
      </Text>

      <Text style={mainText}>
        L'objectif de Foncior est simple : vous permettre de centraliser automatiquement vos calendriers, de suivre votre rentabilité réelle et de simplifier votre fiscalité, sans modifier vos réservations sur les plateformes sources.
      </Text>

      <Section style={highlightBox}>
        <Text style={label}>Prochaines étapes :</Text>
        <Text style={listItem}>
          • Votre compte est actuellement en cours de validation.
        </Text>
        <Text style={listItem}>
          • Nous vous enverrons un second email très prochainement avec vos accès exclusifs et les instructions de connexion.
        </Text>
      </Section>

      <Text style={signature}>
        À très vite,<br />
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
  marginBottom: '15px',
};

const highlightBox = {
  backgroundColor: '#f4b942',
  padding: '20px',
  borderRadius: '6px',
  marginTop: '25px',
  marginBottom: '25px',
};

const label = {
  fontWeight: 'bold',
  margin: '0 0 15px 0',
  color: '#ffffff',
  fontSize: '16px',
};

const listItem = {
  margin: '0 0 10px 0',
  color: '#ffffff',
  lineHeight: '1.5',
  fontSize: '15px',
};

const signature = {
  color: '#006b54',
  fontWeight: 'bold',
  marginTop: '30px',
  lineHeight: '1.5',
};
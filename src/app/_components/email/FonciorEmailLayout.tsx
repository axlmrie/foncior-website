import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface FonciorEmailLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

export const FonciorEmailLayout = ({ previewText, children }: FonciorEmailLayoutProps) => {
  return (
    <Html lang="fr">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://foncior.com/fonciorIcons.png"
              width="150"
              alt="FONCIOR"
              style={logo}
            />
          </Section>

          <Section style={content}>
            {children}
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              <Link href="https://foncior.com/desabonnement" style={footerLink}>Se désabonner</Link>
              {' • '}
              <Link href="https://foncior.com/mentions-legales" style={footerLink}>Mentions légales</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif',
  padding: '20px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  maxWidth: '600px',
  margin: '0 auto',
};

const header = {
  padding: '40px 20px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
};

const content = {
  padding: '0 40px 40px 40px',
};

const footer = {
  backgroundColor: '#006b54',
  padding: '15px',
  textAlign: 'center' as const,
};

const footerText = {
  margin: '0',
};

const footerLink = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '14px',
  margin: '0 10px',
};
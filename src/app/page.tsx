import { Container } from '@components/Container';
import { AppConfig } from '@lib/AppConfig';

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>{AppConfig.header}</Container>
      </header>
      <main>
        <Container>{AppConfig.main}</Container>
      </main>
      <footer>
        <Container>{AppConfig.footer}</Container>
      </footer>
    </div>
  );
}

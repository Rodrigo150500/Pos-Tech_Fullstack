// Serviço que envia emails
class EmailService {
  enviarEmail(destinatario: string, mensagem: string) {
    console.log(`Email enviado para ${destinatario}: ${mensagem}`);
  }
}

// Classe principal da aplicação
class App {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  iniciar() {
    this.emailService.enviarEmail("teste@exemplo.com", "Bem-vindo à aplicação!");
  }
}

// "Injeção manual" da dependência
const emailService = new EmailService();
const app = new App(emailService);
app.iniciar();

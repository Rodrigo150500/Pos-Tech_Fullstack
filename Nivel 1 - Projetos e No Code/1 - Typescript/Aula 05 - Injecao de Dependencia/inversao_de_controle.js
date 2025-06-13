// Serviço que envia emails
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.enviarEmail = function (destinatario, mensagem) {
        console.log("Email enviado para ".concat(destinatario, ": ").concat(mensagem));
    };
    return EmailService;
}());
// Classe principal da aplicação
var App = /** @class */ (function () {
    function App(emailService) {
        this.emailService = emailService;
    }
    App.prototype.iniciar = function () {
        this.emailService.enviarEmail("teste@exemplo.com", "Bem-vindo à aplicação!");
    };
    return App;
}());
// "Injeção manual" da dependência
var emailService = new EmailService();
var app = new App(emailService);
app.iniciar();

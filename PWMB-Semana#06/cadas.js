document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

       
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const cpf = document.getElementById("cpf").value;
        const datadenascimento = document.getElementById("celular").value;
        const celular = document.getElementById("celular").value;

        
        if (nome === "" || email === "" || senha === "" || cpf === "" || datadenascimento === "" || senha === ""celular) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("cadastroForm");
            const senhaInput = document.getElementById("senha");
            const mostrarSenhaButton = document.getElementById("mostrarSenha");
        
            mostrarSenhaButton.addEventListener("click", function () {
                if (senhaInput.type === "password") {
                    senhaInput.type = "text"; // Mostrar a senha
                } else {
                    senhaInput.type = "password"; // Ocultar a senha
                }
            });
        
            form.addEventListener("submit", async function (event) {
                event.preventDefault(); // Evita o envio do formulário padrão
        
                // Obtenha os valores dos campos
                const nome = document.getElementById("nome").value;
                const email = document.getElementById("email").value;
                const senha = document.getElementById("senha").value;
        
                // Valide os campos (você pode adicionar mais verificações aqui)
                if (nome === "" || email === "" || senha === "") {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }
        
                // Crie um hash seguro da senha
                const saltRounds = 10; // Número de rounds de salt (ajuste conforme necessário)
                const hashedSenha = await hashPassword(senha, saltRounds);
        
                // Armazene o hash da senha no campo oculto
                document.getElementById("senhaHash").value = hashedSenha;
        
                // Simule o envio dos dados (você pode enviar os dados para um servidor aqui)
                const dados = {
                    nome: nome,
                    email: email,
                    senha: hashedSenha // Envie o hash da senha para o servidor
                };
        
                console.log("Dados do cadastro:", dados);
                alert("Cadastro realizado com sucesso!");
        
                // Limpe o formulário
                form.reset();
            });
        
            // Função para criar um hash da senha usando bcrypt.js
            async function hashPassword(password, saltRounds) {
                const bcrypt = dcodeIO.bcrypt; // Certifique-se de incluir a biblioteca bcrypt.js em seu projeto
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(password, salt);
                return hashedPassword;
            }
        });
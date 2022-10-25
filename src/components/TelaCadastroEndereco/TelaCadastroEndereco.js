import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
    return (
        <FormContainer>
            <h1>Cadastro </h1>
            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereco:
                    <Input id="nome" />
                </StyledLabel>
                <StyledLabel htmlFor="numero">
                    Telefone fixo:
                    <Input id="numero" />
                </StyledLabel>
                <StyledLabel htmlFor="celular">
                    Celular:
                    <Input id="celular" />
                </StyledLabel>
                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento" />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Finalizar cadastro</SendButton>
                <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
            </Form>
        </FormContainer>
    );
}

export default TelaCadastroEndereco;
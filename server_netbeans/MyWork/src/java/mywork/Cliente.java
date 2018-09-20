/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mywork;

import java.util.List;

/**
 *
 * @author 3823792
 */
public class Cliente extends Pessoa {
    private String pais;
    private String estado;
    private String cidade;
    private String bairro;
    private String logradouro;
    private int num;
    private int cep;

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    @Override
    public List<Avaliacao> getAvaliacoes() {
        return super.getAvaliacoes(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setAvaliacoes(List<Avaliacao> avaliacoes) {
        super.setAvaliacoes(avaliacoes); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getEmail() {
        return super.getEmail(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setEmail(String email) {
        super.setEmail(email); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Mensagem getMsgs() {
        return super.getMsgs(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setMsgs(Mensagem msgs) {
        super.setMsgs(msgs); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getNome() {
        return super.getNome(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setNome(String nome) {
        super.setNome(nome); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public float getPontuacao() {
        return super.getPontuacao(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setPontuacao(float pontuacao) {
        super.setPontuacao(pontuacao); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getSenha() {
        return super.getSenha(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setSenha(String senha) {
        super.setSenha(senha); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Mensagem excluirMsg(Mensagem msg) {
        return super.excluirMsg(msg); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Mensagem mandarMsg() {
        return super.mandarMsg(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public float somaPontuacao() {
        return super.somaPontuacao(); //To change body of generated methods, choose Tools | Templates.
    }
    
    public Servico contratarServico() {
        return null;
    }
    
    public Servico avaliarServico() {
        return null;
    }
}
